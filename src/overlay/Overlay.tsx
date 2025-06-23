import { useEffect, useState } from "react";
import { askLLM } from "../utils/askLLM";

export const Overlay = () => {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const token = import.meta.env.VITE_IO_NET_TOKEN;

    const handler = async (event: MessageEvent) => {
      if (event.data?.type === "MEET_SUBTITLE") {
        const question = event.data.payload;
        const response = await askLLM(question, token);
        setAnswer(response);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "rgba(0,0,0,0.85)",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        zIndex: 9999,
        maxWidth: "500px",
        fontSize: "14px",
      }}
    >
      <strong>AI Answer:</strong>
      <br />
      {answer || "Listening..."}
    </div>
  );
};
