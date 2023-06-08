export interface ChatStateInterface {
    isLoading: boolean,
    data?: string,
    error?: string
}

export const initialState: ChatStateInterface = {
    isLoading: false
}