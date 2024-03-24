import { useState } from 'react'
import burger from '../assets/media/burguer-icon.svg'
import burguerIndigo from '../assets/media/burguer-icon-indigo.svg'

export const Navbar = () => {

    const [navStatus, setNavStatus] = useState(true)

    if (navStatus) {
        return (<>
            <aside className='no-burguer rounded-lg w-1/4'>
                <img src={burger} className='m-4 cursor-pointer rot' onClick={() => setNavStatus(false)}></img>
            </aside>
            </>)
    } else {
        return (<>
        <aside className=''>
                <img src={burguerIndigo} className='m-4 cursor-pointer rot-2' onClick={() => setNavStatus(true)}></img>
            </aside>
        </>)
    }
    
}