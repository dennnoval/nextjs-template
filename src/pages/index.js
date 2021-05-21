import '../styles/Home.module.css'
import { Navbar } from '../components'
// import useSWR from 'swr'
import useSWRInfinite from 'swr'

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null
  const apiUrl = 'https://api.instantwebtools.net/v1/passenger'
  return `${apiUrl}?page=${pageIndex}&size=1`
}

export default function Home() {
	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)
	// const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  return (
  	<>
  		<Navbar/>
    	<main id='Home'>
    		<h1 className='text-danger'>Home Page</h1>
    		<ul className='list-group'>
		  		{data.data.map(passenger => (
		  			<li key={passenger._id} className='list-group-item'>
		  				<h6>ID: {passenger._id}</h6>
		  				<h6>Name: {passenger.name}</h6>
		  				<h6>Trips: {passenger.trips}</h6>
		  			</li>
		  		))}
    		</ul>
    		<br/>
    		<button onClick={() => setSize(size + 1)}
    			className='btn btn-primary'>
    			Load More
    		</button>
    	</main>
    </>
  )
}

