import { useContext, useEffect, useRef, useState } from "react"
import { AvatarImage } from "./AvatarImage"
import userIcon from '../../assets/media/Felipe-img.jpg'
import bender from '../../assets/media/bender.png'
import { Card } from "./Card"
import send from './../../assets/media/send-icon.svg'
import { ConversationProps } from "../../interfaces/ConversationProps"
import { ChatContext } from "../../context/ChatContext"
import { getCarModels } from "../../services/ConsumerServices"


export const History: React.FC<ConversationProps> = ({ botname }) => {

    const username = 'Unkwown'

    const { conversation, handleUsername, upStage } = useContext(ChatContext)

    const messageRef = useRef<HTMLInputElement | null>(null)
    const [messages, setMessages] = useState([...conversation.messages])

    if (messages.length === 0) {
        setMessages([...messages, { text: 'Hola, para empezar. ¿Cuál es tu nombre?', user: botname }])
    }

    useEffect(() => {
        const element = document.getElementById('chatbot-messages');

        if (element) {
            element.scrollTop = element.scrollHeight;
        }

    }, [messages])

    const submitMessage = () => {
        if (messageRef.current) {

            const { current } = messageRef;


            switch (conversation.stage) {
                case 0: {
                    setMessages([...messages, { text: current.value, user: username }]);
                    handleUsername(current.value);
                    upStage();
                    current.value = '';

                    setTimeout(async () => {
                        try {
                          const modelsData = await getCarModels(); // Await for Promise to resolve
                          console.log(modelsData); // Now you can log the JSON data
                          setMessages(prevMessages => [
                            ...prevMessages,
                            { text: '¿En qué vehículo estás interesado?', user: botname }
                          ]);
                        } catch (error) {
                          console.error('Error fetching car models:', error);
                        }
                      }, 1000);
                      break;
                }

            

                default: {
                    setMessages([...messages, { text: current.value, user: conversation.username }])
                    current.value = ''
                    break;
                }
            }
        }

    }


    return (<>
        <div className="flex flex-row" style={{ borderTop: '1px solid rgb(30 27 75 / var(--tw-bg-opacity))' }}>
            <input
                type="text"
                ref={messageRef}
                id="message-bot"
                className="bg-gray-50 border shadow-xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`¡Chatea con ${botname}`}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        submitMessage()
                    }
                }}
                style={{ letterSpacing: '1.5px', outline: 'none' }} />
            <div className="flex flex-col justify-center text-center" >
                <img src={send} className="m-2 cursor-pointer" onClick={() => {
                    submitMessage()
                }}>
                </img>
            </div>
        </div>
        <div className="p-5 overflow-y-auto flex flex-col h-full" id="chatbot-messages" style={{ backgroundColor: '#fffafa', paddingBottom: '1rem' }} >

            {messages.map((message, index) => (
                <>
                    <section className={`flex flex-row place-items-end`} style={{ marginBottom: '1rem', justifyContent: message.user === botname ? 'start' : 'end' }}>
                        <Card name={message.user} id={index.toString()} text={message.text} bot={botname}></Card>
                        <div className={'text-right'}>
                            <AvatarImage url={message.user === botname ? bender : userIcon} name={username}></AvatarImage>
                        </div>
                    </section>
                </>
            ))}

        </div>
    </>)
}