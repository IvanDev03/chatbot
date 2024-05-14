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

        <aside className={`py-2 border shadow-xl burguer-${navState ? 'opened' : 'closed'} flex flex-col justify-between`} id='tab-aside'>
            <section>
                <img
                    src={image}
                    className={`min-w-6 m-4 cursor-pointer rounded-xl border-2 p-2 ${navState ? 'rot' : 'rot-2'}`}
                    id="nav-image"
                    onClick={toggleNav}
                    alt="Burguer icon"
                />
            </section>
            <section className={` ${navState ? '' : 'hidden'}`} style={{ borderTop: '0 1px 0 0' }}>
                <small className="text-white text-xs tracking-widest"> Bienvenidos mi nombre es BotGuy 🤖. <br />Un placer! </small>
            </section>

            <section className={`border-t-2 text-left px-4 ${navState ? '' : 'hidden'}`} style={{ borderTop: '0 1px 0 0' }}>
                <small className="text-white text-xs tracking-widest">BotGuy Service</small>
            </section>


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