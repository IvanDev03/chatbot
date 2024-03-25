import React from "react";
import './ChatStyles.css'
import send from '../../assets/media/send-icon.svg'
import { History } from "./History";

export const Conversation: React.FC<ConversationProps> = ({ botname, username }) => {
    return (<>
        <section className='bg-white border border-indigo-950 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row w-full h-full conversation'>
            <section className="flex flex-col-reverse justify-between" style={{ width: '100%' }}>
                <div className="flex flex-row" style={{ borderTop: '1px solid rgb(30 27 75 / var(--tw-bg-opacity))' }}>
                    <input
                        type="text"
                        id="message-bot"
                        className="bg-gray-50 border border-indigo-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={`¡Chatea con ${botname}`}
                        style={{ letterSpacing: '1.5px' }} />
                    <div className="flex flex-col justify-center text-center" >
                        <img src={send} className="m-2 cursor-pointer">
                        </img>
                    </div>
                </div>
                <History username={username} botname={botname}></History>
                <div className="flex flex-col justify-center bg-indigo-950 text-white text-end p-5" id="nav-chat">
                    <nav>
                        Hola {username}
                    </nav>
                </div>
            </section>
        </section>
    </>)
}