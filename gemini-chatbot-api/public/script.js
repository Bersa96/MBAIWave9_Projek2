const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const chatHistory = [];

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  chatHistory.push({ role: "user", text: userMessage });
  input.value = "";

  const thinkingMessage = appendMessage("bot", "Gemini is thinking...");

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chatHistory.slice(-10), //
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage =
        errorData?.error || "Failed to get response from server.";
      thinkingMessage.textContent = errorMessage;
      return;
    }

    const data = await response.json();

    if (data.result) {
      thinkingMessage.textContent = data.result;
      chatHistory.push({ role: "model", text: data.result });
    } else {
      thinkingMessage.textContent = "Sorry, no response received.";
    }
  } catch (error) {
    thinkingMessage.textContent = "Failed to get response from server.";
    console.error("Error sending message:", error);
  }
});
