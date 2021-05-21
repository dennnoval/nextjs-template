import '../styles/Home.module.css'
import { Navbar } from '../components/index'

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/users.json')
  const users = await res.json()
  return {
    props: { users }
  }
}

export default function Home({ users }) {
  return (
  	<>
  		<Navbar/>
    	<main id='Home'>
    		<h1 className='text-danger'>Home Page</h1>
    		<ul className='list-group'>
		  		{users.map(user => (
		  			<li key={user.id} className='list-group-item'>
		  				<h6>ID: {user.id}</h6>
		  				<h6>Name: {user.name}</h6>
		  				<h6>Username: {user.username}</h6>
		  				<h6>Email: {user.email}</h6>
		  			</li>
		  		))}
    		</ul>
    	</main>
    </>
  )
}

