import "./style/style.css";
import * as messages from "./messagesApi";
import { store } from "./store";
import { getChatMessages, sendChatMessage } from "./chat";
import { render } from "./render";
import { initSmiles } from "./smiles";

document.addEventListener("DOMContentLoaded", async () => {
  initSmiles();
  await getChatMessages();
});

const chatForm = document.querySelector(".formMessage");

if (chatForm) {
  chatForm.addEventListener("submit", async function submit(event) {
    event.preventDefault();
    const formData = new FormData(this);
    await sendChatMessage(
      String(formData.get("name")),
      String(formData.get("inputMessage"))
    );
  });
}

messages.observeWithEventSource(getChatMessages);
store.subscribe(render);
