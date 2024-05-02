import { useContext, useEffect, useRef, useState } from "react"
import { AvatarImage } from "./AvatarImage"
import userIcon from '../../assets/media/ico.jpg'
import bender from '../../assets/media/bender.png'
import { Card } from "./Card"
import send from './../../assets/media/send-icon.svg'
import { ConversationProps } from "../../interfaces/ConversationProps"
import { ChatContext } from "../../context/ChatContext"
import { getCarModels, getEquipmentById, getEquipmentList, getPropertiesByModel } from "../../services/ConsumerServices"
import { CarModels, CarPropertie, Equipment } from "../../interfaces/consumerInterfaces"
import { Message } from "../../interfaces/conversationInterfaces"



export const History: React.FC<ConversationProps> = ({ botname, username }) => {
    const conversationDeletedRef = useRef(false);

    const { conversation, handleUsername, upStage, deleteConv } = useContext(ChatContext)
    const [qtyCars, setQtyCars] = useState(0)
    const [chosenCar, setChosenCar] = useState(0)
    const [inputEnabled, setInputEnabled] = useState(true);

    const messageRef = useRef<HTMLInputElement | null>(null)
    const [messages, setMessages] = useState([...conversation.messages])
    const noNumbers = /[^0-9]/g;

    if (messages.length === 0) {
        
        setMessages([...messages, { text: 'Hola, para empezar. ¿Cuál es tu nombre?', user: botname }])
    }

    useEffect(() => {
        const element = document.getElementById('chatbot-messages');

        if (element) {
            element.scrollTop = element.scrollHeight;
        }


        if (conversation.disableChat && !conversationDeletedRef.current) {
            setMessages([]);
            deleteConv(true);
            conversationDeletedRef.current = true;
        } else if (!conversation.disableChat) {
            conversationDeletedRef.current = false;
        }

    }, [conversation.disableChat, deleteConv])

    const submitMessage = async () => {
        if (messageRef.current) {
            const { current } = messageRef;
            const onlyLetters = /^[A-Za-z]+$/; // Expresión regular que coincide solo con letras
    
            if (!onlyLetters.test(current.value)) {
                alert("Por favor, ingrese solo letras");
                return;
            }


            switch (conversation.stage) {
                case 0: {
                    if(noNumbers.test(current.value) ){
                        setMessages([...messages, { text: current.value, user: username }]);
                        handleUsername(current.value);
                        upStage(1);
                        current.value = '';
    
                        setTimeout(async () => {
                            try {
                                const modelsData: CarModels[] = await getCarModels()
                                console.log(modelsData)
    
                                const carToMessage: Message[] = []
    
                                setQtyCars(modelsData.length)
    
                                if (modelsData.length > 0) {
                                    modelsData.forEach(model => {
                                        carToMessage.push({ text: `${model.id}. ${model.name}`, user: botname })
                                    })
                                }
    
                                setMessages(prevMessages => [
                                    ...prevMessages,
                                    { text: `Un placer hablar contigo. ¿En qué vehículo estás interesado?`, user: botname },
                                    ...carToMessage
                                ]);
                            } catch (error) {
                                console.error('Error fetching car models:', error);
                            }
                        }, 1000);
                    }else{
                        setMessages(prevMessages => [
                            ...prevMessages,
                            { text: current.value, user: username },
                            { text: `Ingresaste un nombre invalido`, user: botname }
                        ]);
                    }
                    


                    break;
                }

                case 1: {
                    let chosenVehicle = 0
                    if(Number.isInteger(parseInt(current.value))) {
                        setMessages(prevMessages => [
                            ...prevMessages,
                            { text: current.value, user: username },
                            { text: `Ingresaste una opcion invalida`, user: botname }
                        ]);
                    }else{
                        setMessages([...messages, { text: current.value, user: username }])
                        chosenVehicle = parseInt(current.value)
                        current.value = ''
    
                        setTimeout(async () => {
                            if (!Number.isNaN(chosenVehicle)) {
                                if (qtyCars === 0) {
                                    setMessages(prevMessages => [
                                        ...prevMessages,
                                        { text: `Lo siento ${username} no tenemos automóviles disponibles`, user: botname }])
                                } else {
                                    if (chosenVehicle <= qtyCars) {
                                        setMessages(prevMessages => [
                                            ...prevMessages,
                                            { text: `Buena elección ${username}`, user: botname },
                                            { text: `¿Qué deseas saber?`, user: botname },
                                            { text: `1. Equipamiento`, user: botname },
                                            { text: `2. Propiedades`, user: botname }
                                        ])
                                        setChosenCar(chosenVehicle)
                                        upStage(1)
                                    } else {
                                        setMessages(prevMessages => [
                                            ...prevMessages,
                                            { text: `Ups ${username}... Escogiste una opción incorrecta, vuelve a seleccionar. Opciones 1 o 2`, user: botname }])
                                    }
                                }
                            } else {
                                setMessages(prevMessages => [
                                    ...prevMessages,
                                    { text: `Ups ${username}... Escogiste una opción incorrecta. Opciones 1 o 2`, user: botname }])
                            }
                        }, 1000)
                    }
                 

                    break
                }

                case 2: {
                    const valueStage = parseInt(current.value)

                    switch (valueStage) {
                        case 1: {

                            const equips: Equipment[] = await getEquipmentList()
                            const equipsToMessage: Message[] = []

                            if (equips.length > 0) {
                                equips.forEach(eq => {
                                    equipsToMessage.push({ text: `${eq.id}. ${eq.nombreEquipamiento}`, user: botname })
                                })

                                setMessages([...messages, { text: current.value, user: username }])
                            }


                            setTimeout(() => {
                                setMessages(prevMessages => [
                                    ...prevMessages,
                                    { text: '¿Que deseas saber acerca del equipamiento?', user: botname },
                                    ...equipsToMessage
                                ])
                            }, 1000)

                            current.value = ''
                            upStage(1)
                            current.value = ''

                            break;
                        }

                        case 2: {
                            const propertiesByCar: CarPropertie = await getPropertiesByModel(chosenCar)
                            const propertiesToMessage: Message[] = []

                            if (propertiesByCar !== {} as CarPropertie) {
                                propertiesToMessage.push({ text: `Longitud: ${propertiesByCar.longitud}`, user: botname })
                                propertiesToMessage.push({ text: `Ancho: ${propertiesByCar.ancho}`, user: botname })
                                propertiesToMessage.push({ text: `Altura: ${propertiesByCar.altura}`, user: botname })
                                propertiesToMessage.push({ text: `Colores: ${propertiesByCar.color}`, user: botname })
                                propertiesToMessage.push({ text: `Peso bruto: ${propertiesByCar.pesoBruto}`, user: botname })
                                propertiesToMessage.push({ text: `Tracción: ${propertiesByCar.traccion}`, user: botname })
                            }

                            setTimeout(() => {
                                setMessages(prevMessages => [
                                    ...prevMessages,
                                    { text: current.value, user: username },
                                    ...propertiesToMessage,
                                    { text: 'Eso es todo!, Gracias por usar nuestro servicio', user: botname },
                                ])
                            }, 1000)
                            setInputEnabled(false);
                            current.value = ''
                                
                            upStage(2)
                            current.disabled = true
                            current.value = ''
                            break
                        }

                    }

                    break
                }

                case 3: {

                    const valueStage = parseInt(current.value)
                    setMessages([...messages, { text: current.value, user: username }])

                    const equipmentsByCar: Equipment = await getEquipmentById(valueStage)

                    const equipmentsToMessage: Message[] = []

                    if (equipmentsByCar.descripcion) {
                        const info: string[] = JSON.parse(equipmentsByCar.descripcion)

                        info.forEach(data => {
                            equipmentsToMessage.push({ text: data, user: botname })
                        })
                    } else {
                        setMessages(prevMessages => [
                            ...prevMessages,
                            { text: `Ups ${username}... Escogiste una opción incorrecta, vuelve a seleccionar 1, 2 o 3`, user: botname }
                        ])

                        current.value = ''

                        break

                    }

                    setTimeout(() => {
                        setMessages([
                            ...messages,
                            { text: current.value, user: username },
                            ...equipmentsToMessage,
                            { text: `Eso es todo ${username}, Gracias por usar nuestro servicio`, user: botname }])
                    }, 1000)

                    setInputEnabled(false);

                    upStage(2)

                    break
                }


            }
        }

    }


    return (<>
        <div className="flex flex-row" style={{ borderTop: '1px solid rgb(30 27 75 / var(--tw-bg-opacity))',colorScheme: 'light only' }}>
            <input
                type="text"
                disabled={!inputEnabled}
                ref={messageRef}
                id="message-bot"
                className="bg-gray-50 border shadow-xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-indigo-500 dark:focus:border-indigo
                -500"
                placeholder={`¡Chatea con ${botname}`}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        submitMessage()
                    }
                }}
                style={{ letterSpacing: '1.5px', outline: 'none', colorScheme: 'light only' }} />
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
                            <AvatarImage url={message.user === botname ? bender : userIcon} name={conversation.username}></AvatarImage>
                        </div>
                    </section>
                </>
            ))}

        </div>
    </>)
}