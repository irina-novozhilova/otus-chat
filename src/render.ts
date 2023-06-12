import { store } from "./store";

export async function render() {
  const state: any = store.getState();
  const chatWindow = document.querySelector(".messenger");
  const error = document.querySelector(".error");

  if (error) {
    error.innerHTML = "";
  }

  if (chatWindow) {
    if (state.chat.isLoading && !chatWindow.innerHTML) {
      chatWindow.innerHTML = "<div>Загрузка чата...</div>";
    }
    if (!state.chat.isLoading && state.chat.data) {
      chatWindow.innerHTML = state.chat.data;
    }
    if (!state.chat.isLoading && state.chat.error) {
      chatWindow.innerHTML = state.chat.error;
    }

    const buttonForm = document.querySelector(".send");
    const inputMessage: HTMLInputElement | null =
      document.querySelector(".inputMessage");

    if (state.form.isLoading) {
      if (buttonForm) {
        buttonForm.innerHTML = "...";
      }
    }
    if (!state.form.isLoading) {
      if (buttonForm && inputMessage) {
        buttonForm.innerHTML = "Отправить";
        inputMessage.value = "";
      }
    }
    if (!state.form.isLoading && error && state.form.error) {
      error.innerHTML = state.form.error;
    }

    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}
