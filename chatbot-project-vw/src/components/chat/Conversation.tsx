import React from "react";
import './ChatStyles.css'
import { History } from "./History";

export const Conversation: React.FC<ConversationProps> = ({ botname, username }) => {
    return (<>
        <section className='bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-row w-full h-full conversation'>
            <section className="flex flex-col-reverse justify-between" style={{ width: '100%' }}>
                
                <History username={username} botname={botname}></History>
                <div className="flex flex-col justify-center bg-indigo-950 text-white text-end p-5 " id="nav-chat">
                    <nav className="animate-blurred-fade-in">
                        Hola {username}
                    </nav>
                </div>
            </section>
        </section>
    </>)
}