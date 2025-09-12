import React from "react";

export const FloatingText = () => {
  return (
    <>
      <p className="animate-float absolute top-[10%] left-[20%] opacity-20 text-primary">
        {"<div>"}
      </p>
      <p className="animate-float absolute top-[30%] left-[80%] opacity-20 text-primary">
        {"</>"}
      </p>
      <p className="animate-float absolute top-[60%] left-[50%] opacity-20 text-primary">
        {"const"}
      </p>
      <p className="animate-float absolute top-[80%] left-[30%] opacity-20 text-primary">
        {"function()"}
      </p>
      <p className="animate-float absolute top-[40%] left-[10%] opacity-20 text-primary">
        {"{}"}
      </p>
      <p className="animate-float absolute top-[20%] left-[60%] opacity-20 text-primary">
        {"return"}
      </p>
      <p className="animate-float absolute top-[70%] left-[70%] opacity-20 text-primary">
        {"=>"}
      </p>
    </>
  );
};
