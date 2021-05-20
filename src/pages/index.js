import '../styles/Home.module.css'
import { Navbar } from '../components/index'

export default function Home() {
  return (
  	<>
  		<Navbar/>
    	<main id='Home'>
    		<h1 className='text-danger'>Home Page</h1>
    	</main>
    </>
  )
}

