import React from "react";

interface LinkExternalProps {
  text: string
  href: string
  icon?: React.ReactNode
  target?: string

}

export function LinkExternal({ text, href, icon, target }: LinkExternalProps ) {
  return (
    <a 
      href={href} 
      target={target}
    >
      {text}
      {icon}
    </a>
  );
}
