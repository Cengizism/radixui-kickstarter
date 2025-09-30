import React, { useState } from 'react';
import { Button } from './button';
import { Label } from '../label/label';
import { Textarea } from './textarea';

export default {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    rows: {
      control: { type: "range", min: 2, max: 10, step: 1 },
    },
  },
};

// Default textarea
export const Default = () => (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="message">Your message</Label>
    <Textarea placeholder="Type your message here." id="message" />
  </div>
);

// Different sizes (rows)
export const DifferentSizes = () => (
  <div className="space-y-4 w-full max-w-md">
    <div className="grid gap-1.5">
      <Label htmlFor="small-textarea">Small (2 rows)</Label>
      <Textarea placeholder="Small textarea..." id="small-textarea" rows={2} />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="medium-textarea">Medium (4 rows)</Label>
      <Textarea
        placeholder="Medium textarea..."
        id="medium-textarea"
        rows={4}
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="large-textarea">Large (6 rows)</Label>
      <Textarea placeholder="Large textarea..." id="large-textarea" rows={6} />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="xl-textarea">Extra Large (8 rows)</Label>
      <Textarea
        placeholder="Extra large textarea..."
        id="xl-textarea"
        rows={8}
      />
    </div>
  </div>
);

// Resizable variants
export const ResizableVariants = () => (
  <div className="space-y-4 w-full max-w-md">
    <div className="grid gap-1.5">
      <Label htmlFor="no-resize">No Resize (default)</Label>
      <Textarea
        placeholder="Cannot be resized..."
        id="no-resize"
        className="resize-none"
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="resize-y">Vertical Resize</Label>
      <Textarea
        placeholder="Can be resized vertically..."
        id="resize-y"
        className="resize-y"
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="resize-x">Horizontal Resize</Label>
      <Textarea
        placeholder="Can be resized horizontally..."
        id="resize-x"
        className="resize-x"
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="resize-both">Both Directions</Label>
      <Textarea
        placeholder="Can be resized in both directions..."
        id="resize-both"
        className="resize"
      />
    </div>
  </div>
);

// States and validation
export const StatesAndValidation = () => (
  <div className="space-y-4 w-full max-w-md">
    <div className="grid gap-1.5">
      <Label htmlFor="normal-state">Normal</Label>
      <Textarea placeholder="Normal state textarea..." id="normal-state" />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="disabled-state">Disabled</Label>
      <Textarea
        placeholder="Disabled textarea..."
        id="disabled-state"
        disabled
        defaultValue="This textarea is disabled"
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="error-state">Error State</Label>
      <Textarea
        placeholder="Error state textarea..."
        id="error-state"
        className="border-red-500 focus-visible:ring-red-500"
        defaultValue="This content has an error"
      />
      <p className="text-sm text-red-500">This field has an error</p>
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="success-state">Success State</Label>
      <Textarea
        placeholder="Success state textarea..."
        id="success-state"
        className="border-green-500 focus-visible:ring-green-500"
        defaultValue="This content is valid"
      />
      <p className="text-sm text-green-600">This field is valid</p>
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="warning-state">Warning State</Label>
      <Textarea
        placeholder="Warning state textarea..."
        id="warning-state"
        className="border-yellow-500 focus-visible:ring-yellow-500"
        defaultValue="This content has a warning"
      />
      <p className="text-sm text-yellow-600">Please review this content</p>
    </div>
  </div>
);

// With character counter
export const WithCharacterCounter = () => {
  const [comment, setComment] = useState("");
  const [bio, setBio] = useState("");
  const maxLength = 280;
  const bioMaxLength = 500;

  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="grid gap-1.5">
        <Label htmlFor="comment-counter">Comment (280 characters max)</Label>
        <Textarea
          placeholder="What's on your mind?"
          id="comment-counter"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={maxLength}
          rows={3}
        />
        <div className="flex justify-between text-sm">
          <span
            className={
              comment.length > maxLength * 0.8
                ? "text-yellow-600"
                : "text-muted-foreground"
            }
          >
            {comment.length}/{maxLength} characters
          </span>
          {comment.length >= maxLength && (
            <span className="text-red-500">Character limit reached</span>
          )}
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="bio-counter">Bio (500 characters max)</Label>
        <Textarea
          placeholder="Tell us about yourself..."
          id="bio-counter"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={bioMaxLength}
          rows={4}
        />
        <div className="flex justify-between text-sm">
          <span
            className={
              bio.length > bioMaxLength * 0.8
                ? "text-yellow-600"
                : "text-muted-foreground"
            }
          >
            {bio.length}/{bioMaxLength} characters
          </span>
          <span className="text-muted-foreground">
            {bioMaxLength - bio.length} remaining
          </span>
        </div>
      </div>
    </div>
  );
};

// Form examples
export const FormExamples = () => {
  const [formData, setFormData] = useState({
    feedback: "",
    description: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData, null, 2)}`);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <h3 className="font-medium">Feedback Form</h3>

      <div className="grid gap-1.5">
        <Label htmlFor="feedback">
          Your Feedback <span className="text-red-500">*</span>
        </Label>
        <Textarea
          placeholder="Tell us what you think..."
          id="feedback"
          required
          value={formData.feedback}
          onChange={(e) => updateField("feedback", e.target.value)}
          rows={3}
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          placeholder="Describe your project in detail..."
          id="description"
          value={formData.description}
          onChange={(e) => updateField("description", e.target.value)}
          rows={4}
        />
        <p className="text-sm text-muted-foreground">
          Provide as much detail as possible to help us understand your needs.
        </p>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          placeholder="Any additional information..."
          id="notes"
          value={formData.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          rows={2}
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Feedback
      </Button>
    </form>
  );
};

// Auto-growing textarea
export const AutoGrowing = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    // Auto-resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="grid gap-1.5">
        <Label htmlFor="auto-grow">Auto-Growing Textarea</Label>
        <Textarea
          placeholder="Start typing and watch this grow..."
          id="auto-grow"
          value={value}
          onChange={handleChange}
          className="resize-none overflow-hidden"
          rows={2}
        />
        <p className="text-sm text-muted-foreground">
          This textarea automatically grows as you type more content.
        </p>
      </div>
    </div>
  );
};

// Rich text formatting helpers
export const WithFormattingHelpers = () => {
  const [content, setContent] = useState("");
  const [cursorPos, setCursorPos] = useState(0);

  const insertText = (textToInsert: string, wrapper = false) => {
    const textarea = document.getElementById(
      "formatting-textarea"
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    let newText;
    if (wrapper) {
      newText =
        content.substring(0, start) +
        textToInsert +
        selectedText +
        textToInsert +
        content.substring(end);
      setCursorPos(start + textToInsert.length);
    } else {
      newText =
        content.substring(0, start) + textToInsert + content.substring(end);
      setCursorPos(start + textToInsert.length);
    }

    setContent(newText);

    // Focus and set cursor position
    setTimeout(() => {
      textarea.focus();
      if (wrapper) {
        textarea.setSelectionRange(
          start + textToInsert.length,
          end + textToInsert.length
        );
      } else {
        textarea.setSelectionRange(cursorPos, cursorPos);
      }
    }, 0);
  };

  return (
    <div className="w-full max-w-md">
      <div className="grid gap-1.5">
        <Label htmlFor="formatting-textarea">Markdown Content</Label>

        {/* Formatting toolbar */}
        <div className="flex flex-wrap gap-1 p-2 border rounded-md bg-muted/50">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertText("**", true)}
          >
            <strong>B</strong>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertText("*", true)}
          >
            <em>I</em>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertText("`", true)}
          >
            {"</>"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertText("[link text](url)")}
          >
            Link
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertText("\n- ")}
          >
            List
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertText("> ")}
          >
            Quote
          </Button>
        </div>

        <Textarea
          placeholder="Write your markdown content here..."
          id="formatting-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="font-mono text-sm"
        />

        <p className="text-sm text-muted-foreground">
          Use the buttons above to insert markdown formatting.
        </p>
      </div>
    </div>
  );
};

// Different use cases
export const UseCases = () => (
  <div className="space-y-6 w-full max-w-md">
    {/* Code input */}
    <div className="grid gap-1.5">
      <Label htmlFor="code-input">Code Snippet</Label>
      <Textarea
        placeholder="Paste your code here..."
        id="code-input"
        className="font-mono text-sm"
        rows={4}
        defaultValue={`function hello(name) {
  return \`Hello, \${name}!\`;
}

console.log(hello('World'));`}
      />
    </div>

    {/* Address input */}
    <div className="grid gap-1.5">
      <Label htmlFor="address-input">Shipping Address</Label>
      <Textarea
        placeholder="Enter your full address..."
        id="address-input"
        rows={3}
        defaultValue={`123 Main Street
Apartment 4B
New York, NY 10001`}
      />
    </div>

    {/* Message/email */}
    <div className="grid gap-1.5">
      <Label htmlFor="message-input">Email Message</Label>
      <Textarea
        placeholder="Compose your message..."
        id="message-input"
        rows={5}
        defaultValue="Dear Team,

I hope this message finds you well. I wanted to reach out regarding the upcoming project deadline.

Best regards,
John"
      />
    </div>

    {/* JSON/data input */}
    <div className="grid gap-1.5">
      <Label htmlFor="json-input">Configuration (JSON)</Label>
      <Textarea
        placeholder="Enter JSON configuration..."
        id="json-input"
        className="font-mono text-sm"
        rows={4}
        defaultValue={`{
  "theme": "dark",
  "language": "en",
  "autoSave": true
}`}
      />
    </div>
  </div>
);

// With custom styling
export const CustomStyling = () => (
  <div className="space-y-4 w-full max-w-md">
    <div className="grid gap-1.5">
      <Label htmlFor="rounded-textarea">Rounded Corners</Label>
      <Textarea
        placeholder="Rounded textarea..."
        id="rounded-textarea"
        className="rounded-xl"
        rows={3}
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="bordered-textarea">Custom Border</Label>
      <Textarea
        placeholder="Custom bordered textarea..."
        id="bordered-textarea"
        className="border-2 border-dashed border-primary"
        rows={3}
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="gradient-textarea">Gradient Border</Label>
      <Textarea
        placeholder="Gradient border textarea..."
        id="gradient-textarea"
        className="border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-padding"
        style={{
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(45deg, #8b5cf6, #ec4899) border-box",
        }}
        rows={3}
      />
    </div>

    <div className="grid gap-1.5">
      <Label htmlFor="shadow-textarea">Custom Shadow</Label>
      <Textarea
        placeholder="Shadow textarea..."
        id="shadow-textarea"
        className="shadow-lg border-0 bg-white"
        rows={3}
      />
    </div>
  </div>
);

// Interactive playground
export const Playground = (args: {
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
}) => (
  <div className="grid w-full gap-1.5">
    <Label htmlFor="playground-textarea">Textarea Playground</Label>
    <Textarea
      placeholder={args.placeholder}
      id="playground-textarea"
      disabled={args.disabled}
      rows={args.rows}
    />
  </div>
);

Playground.args = {
  placeholder: "Type your message here.",
  disabled: false,
  rows: 4,
};
