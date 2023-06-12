import { chatReducer, formReducer } from "./reducer";

const initialStateMock = {
  isLoading: false,
};

const actionInitialMock = {
  type: "FORM_SUCCESS",
  payload: {
    isLoading: false,
  },
};

const actionChatLoadingMock = {
  type: "CHAT_LOADING",
  payload: {
    isLoading: true,
  },
};

const actionChatSuccessMock = {
  type: "CHAT_SUCCESS",
  payload: {
    isLoading: false,
    data: "test",
  },
};

const actionChatErrorMock = {
  type: "CHAT_ERROR",
  payload: {
    isLoading: false,
    error: "error",
  },
};

const actionFormLoadingMock = {
  type: "FORM_LOADING",
  payload: {
    isLoading: true,
  },
};

const actionFormSuccessMock = {
  type: "FORM_SUCCESS",
  payload: {
    isLoading: false,
    data: "test",
  },
};

const actionFormErrorMock = {
  type: "FORM_ERROR",
  payload: {
    isLoading: false,
    error: "error",
  },
};

describe("reducer", () => {
  it("has methods", () => {
    expect(chatReducer).toBeInstanceOf(Function);
    expect(formReducer).toBeInstanceOf(Function);
  });

  it("reducer returns", () => {
    const reducer = chatReducer(initialStateMock, actionInitialMock);
    expect(reducer).toStrictEqual({ isLoading: false });
  });

  it("reducer returns actionChatLoadingMock", () => {
    const reducer = chatReducer({ isLoading: true }, actionChatLoadingMock);
    expect(reducer).toStrictEqual({ isLoading: true });
  });

  it("reducer returns actionChatSuccessMock", () => {
    const reducer = chatReducer({ isLoading: false }, actionChatSuccessMock);
    expect(reducer).toStrictEqual({
      isLoading: false,
      data: "test",
      error: "",
    });
  });

  it("reducer returns actionChatErrorMock", () => {
    const reducer = chatReducer({ isLoading: false }, actionChatErrorMock);
    expect(reducer).toStrictEqual({
      isLoading: false,
      data: "",
      error: "error",
    });
  });

  it("reducer returns actionFormLoadingMock", () => {
    const reducer = formReducer({ isLoading: true }, actionFormLoadingMock);
    expect(reducer).toStrictEqual({ isLoading: true });
  });

  it("reducer returns actionFormSuccessMock", () => {
    const reducer = formReducer({ isLoading: false }, actionFormSuccessMock);
    expect(reducer).toStrictEqual({
      isLoading: false,
      data: "test",
      error: "",
    });
  });

  it("reducer returns actionFormErrorMock", () => {
    const reducer = formReducer({ isLoading: false }, actionFormErrorMock);
    expect(reducer).toStrictEqual({
      isLoading: false,
      data: "",
      error: "error",
    });
  });
});
