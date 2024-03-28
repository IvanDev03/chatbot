import { useReducer } from "react"
import { Conversation, Message } from "../interfaces/conversationInterfaces"
import { ChatContext } from "./ChatContext"
import { chatReducer } from "./chatReducer"

const INITIAL_STATE : Conversation = {
    username: '',
    messages: [],
    stage: 0,
    carModel: 0,
    disableChat: false
}

interface ChatProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const ChatProvider = ({children} : ChatProviderProps) => {

    const [conversation, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    const handleUsername = (name: string) => {
        dispatch({type: "addUserName", payload: {user: name}})
    }

    const handleMessages = (message: Message) => {
        dispatch({type: "addMessage", payload: message})
    }

    const upStage = () => {
        dispatch({type: "upStage", payload: 1})
    }


    return (
        <ChatContext.Provider value={{
            conversation,
            handleUsername,
            handleMessages,
            upStage
        }}>
            {children}
        </ChatContext.Provider>
    )
}