import { ImageAnalyzerClient } from '@/components/image-analyzer/ImageAnalyzerClient';

export default function ImageAnalyzerPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">AI Property Analyzer</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Leverage artificial intelligence to instantly extract features and tags from your property photos.
                </p>
            </div>
            <ImageAnalyzerClient />
        </div>
    );
}
