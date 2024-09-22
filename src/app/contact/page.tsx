"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvwjvnl");

  return (
    <div className="py-20 lg:py-28">
      <Header />
      <div className="container max-w-2xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Me"
          description="I'd love to hear from you! Fill out the form below and I'll get back to you shortly."
        />
        <Card className="mt-10">
          {state.succeeded ? (
            <div className="px-6 py-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Thanks for reaching out!
              </h3>
              <p className="text-white/70">
                I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/60"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/50"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/50"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-950 bg-gradient-to-r from-emerald-300 to-sky-400 hover:from-emerald-400 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

export default ContactForm;
