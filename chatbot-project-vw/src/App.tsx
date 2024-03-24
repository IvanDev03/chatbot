import './App.css'
import { Conversation } from './components/chat/Conversation'
import { Navbar } from './components/nav/Navbar'

function App() {

  return (
    <div className='text-center justify-center flex' id='main-view'>
      <section className='p-6 bg-white border border-indigo-950 shadow dark:bg-gray-800 dark:border-gray-700 principal-section flex flex-row m-6' style={{borderRadius: '0.85rem', height: '90vh'}}>
        <Navbar/>
        <Conversation botname={'gaybot'} username={'No sé'} />
      </section>
    </div>
  )
}

export default App
