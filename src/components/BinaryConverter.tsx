"use client";

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, AlertCircle } from 'lucide-react';

export function BinaryConverter() {
  const [binaryInput, setBinaryInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleBinaryToText = () => {
    setError(null);
    if (!binaryInput.match(/^[01\s]+$/) && binaryInput !== '') {
      setError('Invalid binary input. Only 0, 1, and spaces are allowed.');
      return;
    }
    try {
      const textOutput = binaryInput
        .split(' ')
        .filter(b => b)
        .map(bin => {
          if (bin.length > 8 && bin.length % 8 !==0) { // Allow for multi-byte chars like emojis
             // Check if it's a multiple of 8 for UTF-8, if not, it's likely an error for simple ASCII
          }
          if (!/^[01]+$/.test(bin)) throw new Error("Invalid binary sequence: " + bin);
          const charCode = parseInt(bin, 2);
          if (isNaN(charCode)) throw new Error("Cannot parse binary: " + bin);
          return String.fromCharCode(charCode);
        })
        .join('');
      setTextInput(textOutput);
    } catch (e: any) {
      setError(e.message || 'Error converting binary to text. Ensure valid binary format (e.g., 01001000 01100101).');
    }
  };

  const handleTextToBinary = () => {
    setError(null);
    try {
      const binaryOutput = textInput
        .split('')
        .map(char => {
          const binary = char.charCodeAt(0).toString(2);
          return '00000000'.slice(binary.length) + binary; // Pad to 8 bits
        })
        .join(' ');
      setBinaryInput(binaryOutput);
    } catch (e: any) {
      setError(e.message || 'Error converting text to binary.');
    }
  };

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-md">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
          <Terminal className="text-primary" /> Binary-to-Text Converter
        </h3>
        <p className="text-muted-foreground mt-1">Translate between binary code and human-readable text.</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-2">
          <Label htmlFor="text-input" className="font-medium">Text</Label>
          <Textarea
            id="text-input"
            placeholder="Enter text here..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            rows={5}
            className="resize-none focus:ring-primary focus:border-primary"
          />
          <Button onClick={handleTextToBinary} className="w-full" variant="outline">
            Convert Text to Binary &rarr;
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="binary-input" className="font-medium">Binary</Label>
          <Textarea
            id="binary-input"
            placeholder="Enter binary code here (e.g., 01001000 01100101)"
            value={binaryInput}
            onChange={(e) => setBinaryInput(e.target.value)}
            rows={5}
            className="resize-none font-mono focus:ring-primary focus:border-primary"
          />
          <Button onClick={handleBinaryToText} className="w-full" variant="outline">
            &larr; Convert Binary to Text
          </Button>
        </div>
      </div>
    </div>
  );
}
