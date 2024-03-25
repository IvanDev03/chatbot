import { useEffect, useRef, useState } from "react"
import { AvatarImage } from "./AvatarImage"
import felipe from '../../assets/media/Felipe-img.jpg'
import { Card } from "./Card"

export const History: React.FC<ConversationProps> = ({ botname, username }) => {

    const messageContainer = useRef<HTMLDivElement | null>(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (messageContainer.current) {
            const { current } = messageContainer;
            current.scrollTop = current.scrollHeight;
        }
    }, [messages])

    return (<>
        <div className="overflow-y-auto justify-end card p-5" ref={messageContainer} style={{backgroundColor: '#fffafa'}} >
            <article>
                <Card name={username}/>
            </article>
            <div className={'text-right'}>
                <AvatarImage url={felipe} name={username}></AvatarImage>
            </div>
        </div>
    </>)
}