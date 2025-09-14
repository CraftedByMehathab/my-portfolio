"use client";
import React, { useActionState } from "react";
import { ContactFormInput, ContactFormTextarea } from "./contact-form-item";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { sendContactUsEmailAction } from "./contact-action";
import { SubmitButton } from "@/components/form/submit-button";
import { LucideSend } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactForm = ({ className }: { className?: string }) => {
  const [actionState, action] = useActionState(
    sendContactUsEmailAction,
    EMPTY_ACTION_STATE
  );

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      console.log(actionState);

      //   toast.success(actionState.message, {
      //     duration: 3000,
      //   });
    },
    onError: ({ actionState }) => {
      console.log(actionState);

      //   if (actionState.message) toast.error(actionState.message);
    },
  });
  return (
    <form
      className={cn(
        "space-y-4 @container flex flex-col overflow-hidden",
        className
      )}
      id="contact-us-form"
      action={action}
    >
      <ContactFormInput
        label="Name"
        required
        placeholder="Your Name"
        name="name"
        defaultValue={(actionState?.payload?.get("name") as string) ?? ""}
        actionState={actionState}
      />

      <ContactFormInput
        label="Email"
        required
        placeholder="your.email@example.com"
        type="email"
        name="email"
        defaultValue={(actionState?.payload?.get("email") as string) ?? ""}
        actionState={actionState}
      />
      <ContactFormInput
        label="Subject"
        required
        name="subject"
        placeholder="What is this regarding?"
        defaultValue={(actionState?.payload?.get("subject") as string) ?? ""}
        actionState={actionState}
      />

      <ContactFormTextarea
        label="Project Details"
        required
        placeholder="Tell us about your project"
        name="message"
        defaultValue={(actionState?.payload?.get("message") as string) ?? ""}
        rows={5}
        actionState={actionState}
      />
      <SubmitButton className="w-full @md:w-auto">
        Send Message
        <LucideSend />
      </SubmitButton>
    </form>
  );
};
