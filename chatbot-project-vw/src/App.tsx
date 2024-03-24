import './App.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className='container text-center justify-center flex' id='main-view'>
      <section className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 principal-section flex flex-row'>
        <Navbar/>
      </section>
    </div>
  )
}

export default App
