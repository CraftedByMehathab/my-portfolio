import { ContainerLayout } from "@/components/container-layout";
import React from "react";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./connect-info";

export const ContactContainer = () => {
  return (
    <ContainerLayout
      id="contact"
      title="Get In Touch"
      introText="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
      className="border p-4 md:p-8 rounded-lg border-primary shadow-2xl mb-36 scroll-mt-20"
    >
      <div className="py-8 space-y-8 space-x-8 grid md:grid-cols-2">
        <ContactInfo className="" />
        <ContactForm className="" />
      </div>
    </ContainerLayout>
  );
};
