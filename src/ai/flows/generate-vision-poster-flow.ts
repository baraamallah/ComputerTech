
'use server';
/**
 * @fileOverview A Genkit flow to generate a vision poster image for the GameSmart PC project.
 *
 * - generateVisionPoster - A function that generates an 800x600 poster.
 * - VisionPosterOutput - The return type for the generateVisionPoster function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// No specific input schema needed for this static poster generation.
// If you wanted to customize the prompt later, you could add an input schema.
// export const VisionPosterInputSchema = z.object({});
// export type VisionPosterInput = z.infer<typeof VisionPosterInputSchema>;

const VisionPosterOutputSchema = z.object({ // Removed 'export'
  posterDataUri: z.string().describe('The generated poster image as a data URI.'),
});
export type VisionPosterOutput = z.infer<typeof VisionPosterOutputSchema>;

export async function generateVisionPoster(/*input: VisionPosterInput*/): Promise<VisionPosterOutput> {
  return generateVisionPosterFlow(/*input*/);
}

const generateVisionPosterFlow = ai.defineFlow(
  {
    name: 'generateVisionPosterFlow',
    // inputSchema: VisionPosterInputSchema, // Uncomment if using input
    outputSchema: VisionPosterOutputSchema,
  },
  async (/*input*/) => {
    const prompt = `Generate a visually stunning and futuristic 800x600 poster design for the 'GameSmart PC' project. The poster should embody themes of:
1.  **High-Performance Gaming**: Sleek visuals, dynamic action, perhaps a stylized PC component or abstract representations of speed and power.
2.  **Comprehensive Educational Resources**: Symbols of learning, knowledge, or creativity (e.g., glowing icons of books or code, abstract representations of neural networks or circuits).
3.  **Robust Parental Controls**: Subtle representation of safety, security, or family well-being (e.g., a stylized shield motif, a protective aura around a family icon, or a clean, organized interface element).
The overall aesthetic should be modern, clean, professional, and eye-catching, suitable for a tech project showcase. Use a balanced composition with clear, futuristic typography for the title 'GameSmart PC'. The color palette should be engaging, possibly incorporating blues, teals, or purples with bright accents. The image should be high quality and "super good".`;

    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed or returned no media URL.');
    }

    return { posterDataUri: media.url };
  }
);
