import React from "react";

type BorderSize = "none" |"sm" | "md" | "lg" | "xl";

export interface ICard {
    children: React.ReactNode;
    className?: string;
    borderSize?: BorderSize;
}

const borderClassMap: Record<BorderSize, string> = {
  none: "",
  sm: "border", //1px
  md: "border-2", //2px
  lg: "border-4", //4px 
  xl: "border-8", //8px
}

export const Card: React.FC<ICard> = (
  {
    children,
    className,
    borderSize = "sm" //default small
  }
) => {

  const borderClass = borderClassMap[borderSize];
  
 return(
    <div 
    className ={["rounded-[12px] border-[#ccc] p-2", borderClass, className].join(" ")}
    >
      {children}
    </div>
 );
}