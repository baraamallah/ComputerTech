"use server";

import { generateBrowsingPolicy as generatePolicyFlow } from "@/ai/flows/generate-browsing-policy";
import type { GenerateBrowsingPolicyInput, GenerateBrowsingPolicyOutput } from "@/ai/flows/generate-browsing-policy";
import { z } from "zod";

const PolicySchema = z.object({
  age: z.coerce.number().min(1, "Age must be at least 1.").max(18, "Age must be 18 or younger."),
  interests: z.string().min(3, "Interests must be at least 3 characters long.").max(200, "Interests are too long."),
});

interface ActionResult {
  success: boolean;
  data?: GenerateBrowsingPolicyOutput;
  error?: string;
  fieldErrors?: Record<string, string[] | undefined>;
}

export async function generateBrowsingPolicyAction(prevState: any, formData: FormData): Promise<ActionResult> {
  const rawFormData = {
    age: formData.get("age"),
    interests: formData.get("interests"),
  };

  const validatedFields = PolicySchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid input.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const inputData: GenerateBrowsingPolicyInput = validatedFields.data;

  try {
    const result = await generatePolicyFlow(inputData);
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Error generating browsing policy:", error);
    return { success: false, error: error.message || "Failed to generate policy. Please try again." };
  }
}
