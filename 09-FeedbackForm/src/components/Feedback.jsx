import { useState } from "react";

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}
    >
      <textarea
        placeholder="Enter your feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
