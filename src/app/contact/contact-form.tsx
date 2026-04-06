"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

const topicOptions = [
  "IEP Review",
  "Meeting Prep & Advocacy",
  "Ongoing Support",
  "Evaluation Request Help",
  "General Question",
  "Something Else",
];

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: (data.get("phone") as string) || null,
      topic: data.get("topic") as string,
      message: data.get("message") as string,
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([payload]);

      if (error) throw error;

      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
      setErrorMsg(
        "Something went wrong. Please try emailing hello@baileytherapeutics.com directly."
      );
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-sage/20 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-brand-teal" />
        </div>
        <h3 className="font-sans text-xl font-semibold text-brand-charcoal mb-2">
          Message sent!
        </h3>
        <p className="font-body text-base text-brand-charcoal/60 max-w-sm">
          Thank you for reaching out. I will get back to you within 24 hours.
          Check your inbox (and spam folder, just in case).
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-brand-charcoal/10 bg-brand-cream/40 px-4 py-3.5 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-md border border-brand-charcoal/10 bg-brand-cream/40 px-4 py-3.5 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow"
          />
        </div>
      </div>

      {/* Phone + Topic row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 mb-2"
          >
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            className="w-full rounded-md border border-brand-charcoal/10 bg-brand-cream/40 px-4 py-3.5 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="topic"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 mb-2"
          >
            Topic *
          </label>
          <select
            id="topic"
            name="topic"
            required
            defaultValue=""
            className="w-full rounded-md border border-brand-charcoal/10 bg-brand-cream/40 px-4 py-3.5 font-body text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow appearance-none"
          >
            <option value="" disabled>
              Select a topic
            </option>
            {topicOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a little about your situation. What's coming up? What feels hard right now?"
          className="w-full rounded-md border border-brand-charcoal/10 bg-brand-cream/40 px-4 py-3.5 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow resize-none"
        />
      </div>

      {/* Error message */}
      {formState === "error" && (
        <div className="flex items-start gap-2.5 rounded-lg bg-brand-coral/10 border border-brand-coral/20 p-4">
          <AlertCircle size={18} className="text-brand-coral shrink-0 mt-0.5" />
          <p className="font-body text-sm text-brand-coral">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md bg-brand-teal px-8 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors shadow-md shadow-brand-teal/15 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
