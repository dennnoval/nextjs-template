import '../styles/Home.module.css'
import { Navbar } from '../components/index'
import useSWR from 'swr'

export default function Home() {
	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const { data, error } = useSWR('http://localhost:3000/api/users.json', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  return (
  	<>
  		<Navbar/>
    	<main id='Home'>
    		<h1 className='text-danger'>Home Page</h1>
    		<ul className='list-group'>
		  		{data.map(user => (
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

