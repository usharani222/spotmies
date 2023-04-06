'use client'
import React from "react";
import cx from "classnames";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HoverButton({ text, className, icon, type, onClick }) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      type={type ?? "button"}
      className={cx(
        `gil-reg text-sm flex flex-row items-center justify-center bg-[#142440] text-white rounded-sm min-w-[120px]  min-h-[40px] mt-4 hover:bg-transparent hover:text-[#142440] hover:border hover:border-[#142440]`,
        className
      )}
    >
      {text}
      {icon && <AiOutlineArrowRight className="ml-2" />}
    </button>
  );
}
