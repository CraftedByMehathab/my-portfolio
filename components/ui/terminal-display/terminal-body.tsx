import React from "react";
import { TerminalLine } from "./terminal-line";
import { TypeBlinker } from "@/components/type-blinker";
import { TerminalCommand } from "./terminal-command";

export const TerminalBody = ({ linesList }: { linesList: string[][] }) => {
  return (
    <>
      <div className="p-3 bg-background">
        {linesList.map((eachList, i) => (
          <TerminalCommand lines={eachList} key={i} />
        ))}
      </div>
      <TerminalLine isCommandLine className="px-3">
        <TypeBlinker className="bg-primary" />
      </TerminalLine>
    </>
  );
};
