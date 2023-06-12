import { AnyAction } from "redux";
import { initialState, ChatStateInterface } from "./state";
import * as Actions from "./action";

export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export const chatReducer: Reducer<ChatStateInterface, AnyAction> =
  function chatReducer(state = initialState, action) {
    switch (action.type) {
      case Actions.CHAT_LOADING_TYPE:
        return { ...state, isLoading: action.payload.isLoading };
      case Actions.CHAT_SUCCESS_TYPE:
        return {
          ...state,
          isLoading: action.payload.isLoading,
          data: action.payload.data,
          error: "",
        };
      case Actions.CHAT_ERROR_TYPE:
        return {
          ...state,
          isLoading: action.payload.isLoading,
          data: "",
          error: action.payload.error,
        };
      default:
        return state;
    }
  };

export const formReducer: Reducer<ChatStateInterface, AnyAction> =
  function formReducer(state = initialState, action) {
    switch (action.type) {
      case Actions.FORM_LOADING_TYPE:
        return { ...state, isLoading: action.payload.isLoading };
      case Actions.FORM_SUCCESS_TYPE:
        return {
          ...state,
          isLoading: action.payload.isLoading,
          data: action.payload.data,
          error: "",
        };
      case Actions.FORM_ERROR_TYPE:
        return {
          ...state,
          isLoading: action.payload.isLoading,
          data: "",
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
