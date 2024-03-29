import { Conversation, Message } from "../interfaces/conversationInterfaces";

type ChatAction =  
    {type: 'addMessage', payload: Message} |
    {type: 'clearHistory', payload: boolean} |
    {type: 'addUserName', payload: {user: string}} |
    {type: 'upStage', payload: number}


export const chatReducer = ( state: Conversation, action: ChatAction) : Conversation => {

    switch(action.type) {

        case "addMessage": {

            return {
                ...state,
                messages: [...state.messages, action.payload],
                stage: (state.stage + 1),
            }
        }

        case "addUserName": {
            return {
                ...state,
                username: action.payload.user
            }
        }

        case "upStage": {
            return {
                ...state,
                stage: (state.stage + 1),
            }
        }

        case "clearHistory": {
            return {
                username: 'Unknown',
                messages: [],
                stage: 0,
                carModel: 0,
                disableChat: true,
            }
        }

        default: {
            return state
        }
    }
}