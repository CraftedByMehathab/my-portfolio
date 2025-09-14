import React from "react";

type ContactEmailTemplateProps = {
  message: string;
  name: string;
  email: string;
};

export const ContactEmailTemplate = ({
  email,
  message,
  name,
}: ContactEmailTemplateProps) => {
  return (
    <div>
      <p>{message}</p>

      <div>
        <p>From:</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};
