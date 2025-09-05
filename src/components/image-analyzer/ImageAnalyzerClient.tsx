"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { analyzePropertyImage, type ImageAnalysisOutput } from '@/ai/flows/image-analysis-for-property-tags';
import { Badge } from '@/components/ui/badge';
import { Loader2, UploadCloud, Building, Tags, Sparkles } from 'lucide-react';
import Image from 'next/image';

function fileToDataUri(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export function ImageAnalyzerClient() {
    const { user, loading: authLoading } = useAuth();
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<ImageAnalysisOutput | null>(null);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setAnalysisResult(null);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleAnalyze = async () => {
        if (!file) {
            toast({ variant: 'destructive', title: 'No file selected' });
            return;
        }

        setLoading(true);
        setAnalysisResult(null);

        try {
            const photoDataUri = await fileToDataUri(file);
            const result = await analyzePropertyImage({ photoDataUri });
            setAnalysisResult(result);
            toast({ title: 'Analysis Complete', description: 'Property features identified successfully.' });
        } catch (error) {
            console.error(error);
            toast({ variant: 'destructive', title: 'Analysis Failed', description: 'Could not analyze the image.' });
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) {
        return <div className="flex justify-center items-center h-64"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    }

    if (!user) {
        return (
            <div className="text-center py-16">
                <h2 className="text-2xl font-semibold">Access Denied</h2>
                <p className="text-muted-foreground mt-2">Please log in to use the AI Image Analyzer.</p>
                <Button asChild className="mt-4"><Link href="/login">Log In</Link></Button>
            </div>
        );
    }
    
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Upload Property Image</CardTitle>
                    <CardDescription>Select an image to analyze its features and generate tags.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <label htmlFor="file-upload" className="relative block border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                        <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                        <span className="mt-4 text-sm text-muted-foreground">
                            {file ? file.name : 'Click to upload or drag and drop'}
                        </span>
                        <Input 
                            id="file-upload" 
                            type="file" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </label>

                    {preview && (
                        <div className="relative w-full h-64 rounded-lg overflow-hidden border">
                            <Image src={preview} alt="Image preview" fill className="object-cover" />
                        </div>
                    )}
                    
                    <Button onClick={handleAnalyze} disabled={!file || loading} className="w-full">
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Analyze Image'}
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                    <CardDescription>AI-generated insights from your image.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {loading && (
                        <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-muted-foreground">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                            <p className="mt-4">Analyzing... this may take a moment.</p>
                        </div>
                    )}
                    
                    {!loading && !analysisResult && (
                         <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-muted-foreground">
                            <Sparkles className="h-12 w-12" />
                            <p className="mt-4 text-center">Results will appear here once the analysis is complete.</p>
                        </div>
                    )}

                    {analysisResult && (
                        <div className="space-y-4 animate-in fade-in-50">
                            <div>
                                <h3 className="flex items-center text-lg font-semibold mb-2"><Building className="mr-2 h-5 w-5 text-primary" /> Property Type</h3>
                                <Badge variant="secondary" className="text-base">{analysisResult.propertyType}</Badge>
                            </div>
                            <div>
                                <h3 className="flex items-center text-lg font-semibold mb-2"><Tags className="mr-2 h-5 w-5 text-primary" /> Key Features</h3>
                                <div className="flex flex-wrap gap-2">
                                    {analysisResult.keyFeatures.map((feature, i) => <Badge key={i}>{feature}</Badge>)}
                                </div>
                            </div>
                             <div>
                                <h3 className="flex items-center text-lg font-semibold mb-2"><Sparkles className="mr-2 h-5 w-5 text-primary" /> Descriptive Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {analysisResult.descriptiveTags.map((tag, i) => <Badge variant="outline" key={i}>{tag}</Badge>)}
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
