import React, { useContext } from "react";
import './ChatStyles.css'
import { History } from "./History";
import { ChatContext } from "../../context/ChatContext";

interface InitialProps {
    botname: string
}

export const Conversation: React.FC<InitialProps> = ({ botname}) => {

    const { conversation } = useContext(ChatContext)

    return (
    <>
        <section className='bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-row w-full h-full conversation'>
            <section className="flex flex-col-reverse justify-between" style={{ width: '100%' }}>
                
                <History botname={botname} username={conversation.username}></History>
                <div className="flex flex-col justify-center bg-indigo-950 text-white text-center p-5 " id="nav-chat">
                    <nav className="animate-blurred-fade-in ">
                        Hola {conversation.username}
                    </nav>
                </div>
            </section>
        </section>
    </>)
}