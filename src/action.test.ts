import * as Action from "./action";

describe("actions", () => {
  it("has methods", () => {
    expect(Action.getChatLoadingAction).toBeInstanceOf(Function);
    expect(Action.getChatSuccessAction).toBeInstanceOf(Function);
    expect(Action.getChatErrorAction).toBeInstanceOf(Function);
    expect(Action.getFormLoadingAction).toBeInstanceOf(Function);
    expect(Action.getFormSuccessAction).toBeInstanceOf(Function);
    expect(Action.getFormErrorAction).toBeInstanceOf(Function);
  });

  it("getChatLoadingAction returns correct action", () => {
    expect(Action.getChatLoadingAction()).toStrictEqual({
      type: "CHAT_LOADING",
      payload: {
        isLoading: true,
      },
    });
  });

  it("getChatSuccessAction returns correct action", () => {
    expect(Action.getChatSuccessAction("test")).toStrictEqual({
      type: "CHAT_SUCCESS",
      payload: {
        isLoading: false,
        data: "test",
      },
    });
  });

  it("getChatErrorAction returns correct action", () => {
    expect(Action.getChatErrorAction("error")).toStrictEqual({
      type: "CHAT_ERROR",
      payload: {
        isLoading: false,
        error: "error",
      },
    });
  });

  it("getFormLoadingAction returns correct action", () => {
    expect(Action.getFormLoadingAction()).toStrictEqual({
      type: "FORM_LOADING",
      payload: {
        isLoading: true,
      },
    });
  });

  it("getFormSuccessAction returns correct action", () => {
    expect(Action.getFormSuccessAction()).toStrictEqual({
      type: "FORM_SUCCESS",
      payload: {
        isLoading: false,
      },
    });
  });

  it("getFormErrorAction returns correct action", () => {
    expect(Action.getFormErrorAction("error")).toStrictEqual({
      type: "FORM_ERROR",
      payload: {
        isLoading: false,
        error: "error",
      },
    });
  });
});
