'use server';
/**
 * @fileOverview Analyzes property images to identify property type and key features, and automatically generate descriptive tags.
 *
 * - analyzePropertyImage - A function that handles the image analysis process.
 * - ImageAnalysisInput - The input type for the analyzePropertyImage function.
 * - ImageAnalysisOutput - The return type for the analyzePropertyImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImageAnalysisInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a property, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ImageAnalysisInput = z.infer<typeof ImageAnalysisInputSchema>;

const ImageAnalysisOutputSchema = z.object({
  propertyType: z.string().describe('The type of property (e.g., house, apartment, condo).'),
  keyFeatures: z.array(z.string()).describe('Key features identified in the image (e.g., swimming pool, garden, balcony).'),
  descriptiveTags: z.array(z.string()).describe('Descriptive tags generated for the property (e.g., modern, spacious, luxurious).'),
});
export type ImageAnalysisOutput = z.infer<typeof ImageAnalysisOutputSchema>;

export async function analyzePropertyImage(input: ImageAnalysisInput): Promise<ImageAnalysisOutput> {
  return analyzePropertyImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePropertyImagePrompt',
  input: {schema: ImageAnalysisInputSchema},
  output: {schema: ImageAnalysisOutputSchema},
  prompt: `You are an AI expert in real estate image analysis. Your task is to analyze the provided property image and extract relevant information to generate descriptive tags.

  Analyze the image and identify the property type (e.g., house, apartment, condo). Also, identify key features visible in the image (e.g., swimming pool, garden, balcony). Finally, generate descriptive tags that can be used to categorize and search for the property.

  Here is the image to analyze: {{media url=photoDataUri}}
  Make sure to return property type, key features and descriptive tags.`,
});

const analyzePropertyImageFlow = ai.defineFlow(
  {
    name: 'analyzePropertyImageFlow',
    inputSchema: ImageAnalysisInputSchema,
    outputSchema: ImageAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

