import { getChatMessages, sendChatMessage } from "./chat";
import * as messaging from "./messagesApi";

let fetchSpyGet: any;
let fetchSpySend: any;
describe("chat", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("has methods", () => {
    expect(getChatMessages).toBeInstanceOf(Function);
    expect(sendChatMessage).toBeInstanceOf(Function);
  });

  it("getChatMessage", async () => {
    // @ts-ignore
    fetchSpyGet = jest.spyOn(messaging, "getMessagesList");
    // @ts-ignore
    fetchSpyGet.mockResolvedValue({
      json: () =>
        Promise.resolve([
          {
            nickname: "Vova",
            message: "Hello!",
            now: 1686584896,
          },
          {
            nickname: "Vasya",
            message: "Hi!",
            now: 1686584893,
          },
        ]),
    });
    await getChatMessages();
    expect(messaging.getMessagesList).toBeCalled();
  });

  // it("get all messages", async () => {
  //     // @ts-ignore
  //     fetchSpyGet = jest.spyOn(window, "getMessagesList");
  //     // @ts-ignore
  //     fetchSpyGet.mockResolvedValue({
  //         json: () => Promise.resolve([
  //             {
  //                 nickname: 'Vova',
  //                 message: 'Hello!',
  //                 now: 1686584896
  //             },
  //             {
  //                 nickname: 'Vasya',
  //                 message: 'Hi!',
  //                 now: 1686584893
  //             },
  //
  //         ]),
  //     });
  //     const allMessagesHtml = await getChatMessages();
  //     // @ts-ignore
  //     expect(allMessagesHtml).toStrictEqual('zopa');
  // });

  it("sendChatMessage", () => {
    fetchSpySend = jest.spyOn(messaging, "sendMessage");
    // @ts-ignore
    fetchSpySend.mockResolvedValue({
      json: () => Promise.resolve("{}"),
    });
    sendChatMessage("test", "test message");
    expect(messaging.sendMessage).toBeCalled();
  });
});
