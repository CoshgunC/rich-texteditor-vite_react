"use client"
import React, { useRef } from 'react';

const TextArea = ({ formatText }) => {
  const textRef = useRef();

  const handleFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div
      ref={textRef}
      className="p-4 w-full h-screen border-gray-500 border-l-2 outline-none bg-[#fffffe] overflow-y-auto"
      contentEditable
      suppressContentEditableWarning={true}
      onInput={() => formatText(textRef.current.innerHTML)}
    >
    </div>
  );
};

export default TextArea;