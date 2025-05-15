'use server';
/**
 * @fileOverview A browsing policy generator AI agent.
 *
 * - generateBrowsingPolicy - A function that handles the browsing policy generation process.
 * - GenerateBrowsingPolicyInput - The input type for the generateBrowsingPolicy function.
 * - GenerateBrowsingPolicyOutput - The return type for the generateBrowsingPolicy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBrowsingPolicyInputSchema = z.object({
  age: z.number().describe('The age of the child.'),
  interests: z.string().describe('The interests of the child.'),
});
export type GenerateBrowsingPolicyInput = z.infer<
  typeof GenerateBrowsingPolicyInputSchema
>;

const GenerateBrowsingPolicyOutputSchema = z.object({
  policy: z.string().describe('The generated browsing policy.'),
});
export type GenerateBrowsingPolicyOutput = z.infer<
  typeof GenerateBrowsingPolicyOutputSchema
>;

export async function generateBrowsingPolicy(
  input: GenerateBrowsingPolicyInput
): Promise<GenerateBrowsingPolicyOutput> {
  return generateBrowsingPolicyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBrowsingPolicyPrompt',
  input: {schema: GenerateBrowsingPolicyInputSchema},
  output: {schema: GenerateBrowsingPolicyOutputSchema},
  prompt: `You are an AI assistant specialized in generating child-appropriate browsing policies for parental control software.

  Based on the child's age and interests, create a comprehensive yet easy-to-understand browsing policy that ensures their safety and well-being online. 

  Age: {{age}}
  Interests: {{interests}}

  Consider specifying allowed and disallowed websites, time limits, and content filtering rules. The browsing policy should be formatted so that it can be easily copy and pasted into parental control software.
  Browsing Policy:`,
});

const generateBrowsingPolicyFlow = ai.defineFlow(
  {
    name: 'generateBrowsingPolicyFlow',
    inputSchema: GenerateBrowsingPolicyInputSchema,
    outputSchema: GenerateBrowsingPolicyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
