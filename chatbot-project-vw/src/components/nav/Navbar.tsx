import { useState } from "react"
import burguerIcon from "../../assets/media/burguer-icon.svg"
import burguerIndigo from "../../assets/media/burguer-icon-indigo.svg"
import './NavStyles.css'

export const Navbar = () => {

    const [navState, setNavState] = useState(true);
    const image = navState ? burguerIcon : burguerIndigo;

    const toggleNav = () => {
        setNavState(!navState);
        setNavProperties(navState);
    };

    return (
        <aside className= {`burguer-${navState ? 'opened' : 'closed'} `} id='tab-aside'>
            <img
                src={image}
                className={`m-4 cursor-pointer ${navState ? 'rot' : 'rot-2'}`}
                id="nav-image"
                onClick={toggleNav}
                alt="Burguer icon"
            />
        </aside>
    );
};

const setNavProperties = (state: boolean) => {
    const asideMain = document.getElementById('tab-aside');
    const image = document.getElementById('nav-image');

    asideMain?.classList.toggle('animate-flip-x', !state)

    if (asideMain && image) {
        asideMain.classList.toggle('burguer-closed', !state);
        asideMain.classList.toggle('w-/4', !state);
        asideMain.classList.toggle('rounded', !state);
        image.classList.toggle('rot-2', !state);
        image.classList.toggle('rot', state);
    }
};