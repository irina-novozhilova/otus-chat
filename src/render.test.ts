import { render } from "./render";
import { store } from "./store";

let messenger: HTMLDivElement | null;
let error: HTMLDivElement | null;
let button: HTMLButtonElement | null;
let input: HTMLInputElement | null;

const mockStateChatLoading = {
  chat: {
    isLoading: true,
  },
  form: {
    isLoading: false,
  },
};

const mockStateChatSuccess = {
  chat: {
    isLoading: false,
    data: "some-messages",
  },
  form: {
    isLoading: false,
  },
};

const mockStateChatError = {
  chat: {
    isLoading: false,
    data: "",
    error: "error",
  },
  form: {
    isLoading: false,
  },
};

const mockStateFormLoading = {
  chat: {
    isLoading: false,
  },
  form: {
    isLoading: true,
  },
};

const mockStateFormSuccess = {
  chat: {
    isLoading: false,
  },
  form: {
    isLoading: false,
  },
};

const mockStateFormError = {
  chat: {
    isLoading: false,
  },
  form: {
    isLoading: false,
    error: "error",
  },
};

describe("render", () => {
  beforeEach(() => {
    messenger = document.createElement("div");
    messenger.classList.add("messenger");

    error = document.createElement("div");
    error.classList.add("error");

    button = document.createElement("button");
    button.classList.add("send");
    button.innerHTML = "Отправить";

    input = document.createElement("input");
    input.classList.add("inputMessage");

    jest.mock("./store");

    // @ts-ignore
    jest
      .spyOn(global.document, "querySelector")
      // @ts-ignore
      .mockImplementation((selector) => {
        switch (selector) {
          case ".error":
            return error;
          case ".messenger":
            return messenger;
          case ".send":
            return button;
          case ".inputMessage":
            return input;
          default:
            return undefined;
        }
      });
  });

  afterAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("is a function", () => {
    expect(render).toBeInstanceOf(Function);
  });

  it("messenger is empty at the start", () => {
    render();
    expect(messenger?.innerHTML).toStrictEqual("");
  });

  it("error is empty at the start", () => {
    render();
    expect(error?.innerHTML).toStrictEqual("");
  });

  it("first loading chat", () => {
    store.getState = jest.fn().mockReturnValue(mockStateChatLoading);
    render();
    expect(messenger?.innerHTML).toStrictEqual("<div>Загрузка чата...</div>");
  });

  it("messages success loaded to chat", () => {
    store.getState = jest.fn().mockReturnValue(mockStateChatSuccess);
    render();
    expect(messenger?.innerHTML).toStrictEqual("some-messages");
  });

  it("messages chat error", () => {
    store.getState = jest.fn().mockReturnValue(mockStateChatError);
    render();
    expect(messenger?.innerHTML).toStrictEqual("error");
  });

  it("is loading form", () => {
    store.getState = jest.fn().mockReturnValue(mockStateFormLoading);
    render();
    expect(button?.innerHTML).toStrictEqual("...");
  });

  it("is success form", () => {
    store.getState = jest.fn().mockReturnValue(mockStateFormSuccess);
    render();
    expect(button?.innerHTML).toStrictEqual("Отправить");
    expect(input?.value).toStrictEqual("");
  });

  it("is error form", () => {
    store.getState = jest.fn().mockReturnValue(mockStateFormError);
    render();
    expect(error?.innerHTML).toStrictEqual("error");
  });
});
