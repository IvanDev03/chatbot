export interface Conversation {
    username: string,
    messages: Message[],
    stage: number,
    carModel: number,
    disableChat: boolean
}

export interface Message {
    text: string,
    user: string
}