"use client";

import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, FileText, AlertCircle } from 'lucide-react';
import { generateBrowsingPolicyAction } from '@/lib/actions';

const policySchema = z.object({
  age: z.coerce.number().min(1, "Age must be at least 1.").max(18, "Age must be 18 or younger."),
  interests: z.string().min(3, "Interests must be at least 3 characters long.").max(200, "Interests are too long (max 200 chars)."),
});

type PolicyFormValues = z.infer<typeof policySchema>;

const initialState = {
  success: false,
  data: undefined,
  error: undefined,
  fieldErrors: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Policy
        </>
      )}
    </Button>
  );
}


export function PolicyGenerator() {
  const [state, formAction] = useFormState(generateBrowsingPolicyAction, initialState);
  const [generatedPolicy, setGeneratedPolicy] = useState<string | null>(null);

  const form = useForm<PolicyFormValues>({
    resolver: zodResolver(policySchema),
    defaultValues: {
      age: 10,
      interests: 'video games, science',
    },
    // Populate form errors from server action
    errors: state?.fieldErrors ? 
      Object.entries(state.fieldErrors).reduce((acc, [key, value]) => {
        if (value && value.length > 0) {
          acc[key as keyof PolicyFormValues] = { type: 'server', message: value[0] };
        }
        return acc;
      }, {} as any) 
      : undefined,
  });
  
  React.useEffect(() => {
    if (state.success && state.data?.policy) {
      setGeneratedPolicy(state.data.policy);
      form.reset(); // Optionally reset form on success
    }
    if (!state.success && state.fieldErrors) {
       Object.entries(state.fieldErrors).forEach(([fieldName, errors]) => {
        if (errors && errors.length > 0) {
          form.setError(fieldName as keyof PolicyFormValues, { type: 'server', message: errors[0] });
        }
      });
    }
  }, [state, form]);


  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Sparkles className="text-primary" /> AI Browsing Policy Generator
        </CardTitle>
        <CardDescription>
          Create a custom browsing policy for your child based on their age and interests.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form action={formAction} className="space-y-6">
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="age">Child's Age</FormLabel>
                  <FormControl>
                    <Input id="age" type="number" placeholder="e.g., 12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="interests">Child's Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      id="interests"
                      placeholder="e.g., coding, art, space exploration"
                      {...field}
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {state.error && !state.fieldErrors && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-end gap-2">
            <SubmitButton />
          </CardFooter>
        </form>
      </Form>

      {generatedPolicy && (
        <div className="p-6 border-t">
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <FileText className="text-primary" /> Generated Policy:
          </h4>
          <pre className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap font-mono overflow-x-auto">
            {generatedPolicy}
          </pre>
           <Button variant="outline" size="sm" className="mt-4" onClick={() => navigator.clipboard.writeText(generatedPolicy)}>
            Copy Policy
          </Button>
        </div>
      )}
    </Card>
  );
}
