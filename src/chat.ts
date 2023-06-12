import { getMessagesList, sendMessage } from "./messagesApi";
import { store } from "./store";
import * as Actions from "./action";
import { parseSmiles } from "./smiles";

type mess = {
  nickname: string;
  name?: string;
  message: string;
  now: number;
};

export async function getChatMessages() {
  store.dispatch(Actions.getChatLoadingAction());

  try {
    // @ts-ignore
    const allMessages: any[] = await getMessagesList();

    let messagesHtml = "";
    allMessages.map((currentValue: any) => {
      const realName = currentValue.nickname
        ? currentValue.nickname
        : currentValue.name;
      const message = parseSmiles(currentValue.message);
      messagesHtml = `${messagesHtml}<div><b>${realName}</b>: ${message}</div>`;
      return messagesHtml;
    });
    store.dispatch(Actions.getChatSuccessAction(messagesHtml));
  } catch (error: any) {
    store.dispatch(
      Actions.getChatErrorAction(`Ошибка получения сообщений. ${error.message}`)
    );
  }
}

export async function sendChatMessage(nickname: string, message: string) {
  store.dispatch(Actions.getFormLoadingAction());

  try {
    const date = Date.now();
    const currentMessage: mess = {
      message,
      nickname,
      now: date,
    };
    // @ts-ignore
    const response: any = await sendMessage(currentMessage);

    if (response.name) {
      await getChatMessages();
      store.dispatch(Actions.getFormSuccessAction());
    } else {
      store.dispatch(Actions.getFormErrorAction("Ошибка отправки сообщения"));
    }
  } catch (error: any) {
    store.dispatch(
      Actions.getFormErrorAction(`Ошибка отправки сообщения. ${error.message}`)
    );
  }
}
