import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";

export const Route = createFileRoute("/test-form")({
  component: TestForm,
});

function TestForm() {
  const [type, setType] = useState("Freelance");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-2xl font-bold mb-8">Test Form</h1>
      
      <form
        ref={formRef}
        className="max-w-md space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          setError(null);

          const formData = new FormData(e.currentTarget);
          console.log("Form data:", {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            type,
          });

          setSent(true);
          e.currentTarget.reset();
          setLoading(false);
        }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-gray-300 bg-white px-4 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@studio.com"
            className="w-full border border-gray-300 bg-white px-4 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell me about the project or role."
            className="w-full border border-gray-300 bg-white px-4 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 text-sm disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {sent ? (
          <span className="text-green-600">Form submitted successfully</span>
        ) : null}
        {error ? (
          <span className="text-red-600">{error}</span>
        ) : null}
      </form>
    </div>
  );
}
