import { createContext } from "react";
import { Conversation, Message } from "../interfaces/conversationInterfaces";

type ChatContextProps = {
    conversation: Conversation,
    handleUsername: (name: string) => void,
    handleMessages: (message: Message) => void,
    upStage: (num: number) => void,
    deleteConv: (bool: boolean) => void
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps)