import React from "react";

export default function ChatMessage({
  isUserMessage,
  senderAddress,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={
        "p-3 my-5 w-fit rounded max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl " +
        (isUserMessage
          ? "bg-purple-500 ml-auto text-white"
          : "bg-purple-50 mr-auto")
      }
    >
      <p className="font-semibold">{senderAddress}</p>
      {children}
    </div>
  );
}
