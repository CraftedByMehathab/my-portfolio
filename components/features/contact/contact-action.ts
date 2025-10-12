"use server";

import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";

import { z } from "zod";
import { ContactEmailTemplate } from "./contact-email-template";
import { resend } from "../resend";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.email().trim().min(1, "Email is required."),
  message: z.string().trim().min(2, "Message is required."),
  subject: z.string().trim().min(1, "Subject is required."),
});

const sendContactUsEmail = ({
  name,
  message,
  email,
  subject,
}: {
  name: string;
  message: string;
  email: string;
  subject: string;
}) =>
  resend.emails.send({
    from: `Portfolio <${process.env.RESEND_CONTACT_EMAIL_FROM ?? ""}>`,
    to: [process.env.RESEND_CONTACT_EMAIL_TO ?? ""],

    subject,
    react: ContactEmailTemplate({
      name,
      message,
      email,
    }),
  });

export async function sendContactUsEmailAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const fields = schema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
      subject: formData.get("subject"),
    });

    const { error } = await sendContactUsEmail({
      name: fields.name,
      email: fields.email,
      message: fields.message,
      subject: `PORTFOLIO_CONTACT => ${fields.subject}`,
    });

    if (error) return formErrorToActionState(error, formData);

    return toActionState(`Message sent.`);
  } catch (error) {
    return formErrorToActionState(error, formData);
  }
}
