import React from "react"

interface CardBody {
    name: string,
    text: string,
    id: string,
    bot?: string
}

export const Card: React.FC<CardBody> = ({ name, text, id}) => {
    return (<>
        <section className="animate-squeeze bg-white border-indigo-950 shadow-xl  dark:border-gray-700 flex flex-row w-30 h-30 rounded-lg" 
        id={id}
        style={{ marginRight: '0.75rem', padding: '0.5px 1rem 1rem 1rem', maxWidth: '500px'}}>
            <label>
                <strong className="flex py-2 text-gray-400 underline">{name}</strong>
                <p className="text-xs text-indigo-600" style={{wordBreak: 'break-all'}}>{text}</p>
            </label>
        </section>
    </>)
}