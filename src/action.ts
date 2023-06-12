export interface Action<T = any> {
  type: T;
  payload?: any;
}

export const CHAT_LOADING_TYPE = "CHAT_LOADING";
export const CHAT_SUCCESS_TYPE = "CHAT_SUCCESS";
export const CHAT_ERROR_TYPE = "CHAT_ERROR";

export const FORM_LOADING_TYPE = "FORM_LOADING";
export const FORM_SUCCESS_TYPE = "FORM_SUCCESS";
export const FORM_ERROR_TYPE = "FORM_ERROR";

export function getChatLoadingAction(): Action {
  return {
    type: CHAT_LOADING_TYPE,
    payload: {
      isLoading: true,
    },
  };
}

export function getChatSuccessAction(data: string): Action {
  return {
    type: CHAT_SUCCESS_TYPE,
    payload: {
      isLoading: false,
      data,
    },
  };
}

export function getChatErrorAction(error: string): Action {
  return {
    type: CHAT_ERROR_TYPE,
    payload: {
      isLoading: false,
      error,
    },
  };
}

export function getFormLoadingAction(): Action {
  return {
    type: FORM_LOADING_TYPE,
    payload: {
      isLoading: true,
    },
  };
}

export function getFormSuccessAction(): Action {
  return {
    type: FORM_SUCCESS_TYPE,
    payload: {
      isLoading: false,
    },
  };
}

export function getFormErrorAction(error: string): Action {
  return {
    type: FORM_ERROR_TYPE,
    payload: {
      isLoading: false,
      error,
    },
  };
}
