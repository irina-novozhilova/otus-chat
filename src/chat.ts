import * as messages from './messagesApi'
import {store} from "./store";
import {
    getChatErrorAction,
    getChatLoadingAction,
    getChatSuccessAction, getFormErrorAction,
    getFormLoadingAction,
    getFormSuccessAction
} from "./action";
import {Exception} from "sass";

type mess = {
    nickname: string;
    name?: string;
    message: string;
    now: number;
};

export async function getChatMessages() {
    store.dispatch(getChatLoadingAction());

    try {
        const allMessages: any[] = await messages.getMessagesList();

        let messagesHtml: string = '';
        allMessages.map(function (currentValue: any): void {
            let realName = (currentValue.nickname) ? currentValue.nickname : currentValue.name;
            messagesHtml = messagesHtml + '<div><b>' + realName + '</b>: ' + currentValue.message + '</div>';
        });
        store.dispatch(getChatSuccessAction(messagesHtml));
    } catch (error: any) {
        store.dispatch(getChatErrorAction('Ошибка получения сообщений. ' + error.message));
    }
}

export async function sendChatMessage(nickname:string, message:string) {
    store.dispatch(getFormLoadingAction());

    try {
        const date = Date.now()
        const currentMessage: mess = {
            message, nickname, now: date
        }
        const response: any = await messages.sendMessage(currentMessage);

        if (response.name) {
            await getChatMessages();
            store.dispatch(getFormSuccessAction());
        } else {
            store.dispatch(getFormErrorAction('Ошибка отправки сообщения'));
        }
    } catch (error: any) {
        store.dispatch(getFormErrorAction('Ошибка отправки сообщения. ' + error.message));
    }


}