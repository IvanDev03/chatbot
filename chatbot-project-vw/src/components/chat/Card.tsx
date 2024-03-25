export const Card = ({ name }) => {
    return (<>
        <section className="bg-white border-indigo-950 shadow-xl dark:bg-gray-800 dark:border-gray-700 flex flex-row w-30 h-full rounded-lg " style={{ marginRight: '0.75rem', padding: '0.5px 1rem 1rem 1rem'}}>
            <label>
                <strong className="flex py-2 text-gray-400">{name}</strong>
                <p className="text-xs text-indigo-600">Hola ChatBot, quisiera obtener más información!</p>
            </label>

        </section>
    </>)
}