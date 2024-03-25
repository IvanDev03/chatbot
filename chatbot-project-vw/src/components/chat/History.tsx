import { useEffect, useRef, useState } from "react"
import { AvatarImage } from "./AvatarImage"
import felipe from '../../assets/media/Felipe-img.jpg'
import bender from '../../assets/media/bender.png'
import { Card } from "./Card"
import send from './../../assets/media/send-icon.svg'


export const History: React.FC<ConversationProps> = ({ botname, username }) => {

    const messageRef = useRef<HTMLInputElement | null>(null)
    const [messages, setMessages] = useState([{ text: '¿Hola, cómo puedo ayudarte?', user: botname }])

    useEffect(() => {
        const element = document.getElementById('chatbot-messages');

        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [messages])

    const submitMessage = () => {
        if (messageRef.current) {
            const { current } = messageRef;
            setMessages([...messages, { text: current.value, user: username }])
        }
    }


    return (<>
        <div className="flex flex-row " style={{ borderTop: '1px solid rgb(30 27 75 / var(--tw-bg-opacity))' }}>
            <input
                type="text"
                ref={messageRef}
                id="message-bot"
                className="bg-gray-50 border shadow-xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`¡Chatea con ${botname}`}
                style={{ letterSpacing: '1.5px', outline: 'none' }} />
            <div className="flex flex-col justify-center text-center" >
                <img src={send} className="m-2 cursor-pointer" onClick={() => {
                    submitMessage()
                }}>
                </img>
            </div>
        </div>
        <div className="p-5 overflow-y-auto h-full flex flex-col justify-end" id="chatbot-messages" style={{ backgroundColor: '#fffafa', paddingBottom: '1rem' }} >
            
                {messages.map((message, index) => (
                    <>
                    <section className={`flex justify-${message.user === botname ? 'start' : 'end'} flex-row place-items-end`} style={{marginBottom: '1rem'}}>
                        <Card name={message.user} id={index.toString()} text={message.text} bot={botname}></Card>
                        <div className={'text-right'}>
                            <AvatarImage url={message.user === botname ? bender : felipe} name={username}></AvatarImage>
                        </div>
                    </section>    
                    </>
                ))}
            

        </div>
    </>)
}