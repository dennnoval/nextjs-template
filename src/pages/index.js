import '../styles/Home.module.css'
import { Navbar } from '../components'
// import useSWR from 'swr'
// import useSWRInfinite from 'swr'
import { usePaginatePassengers } from "../../useRequest"

/** const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null
  const apiUrl = 'https://api.instantwebtools.net/v1'
  return `${apiUrl}/passenger?page=${pageIndex}&size=1`
} */

export default function Home() {
	// const fetcher = url => fetch(url).then(res => res.json())
	// const { data, error } = useSWR('http://localhost:3000/api/users', fetcher)
	/** const apiUrl = 'https://api.instantwebtools.net/v1'
	const { data, error, size, setSize } = useSWRInfinite(
		index => apiUrl+'/passenger?size=1&page='+index,
		fetcher
	) */
	
	const {
    res,
    error,
    size,
    setSize
  } = usePaginatePassengers()

  if (error) return <h4> Failed to load</h4>
  if (!res) return <h4> Loading...</h4>
  
  console.log(res[0])
  // res[0].data.map(x => console.log(x))
  
  return (
  	<>
  		<Navbar/>
    	<main id='Home'>
    		<h1 className='text-danger'>Home Page</h1>
    		<ul className='list-group'>
		  		{/** res.map(passenger => (
		  			<li key={passenger._id} className='list-group-item'>
							<h6>ID: {passenger._id}</h6>
							<h6>Name: {passenger.name}</h6>
							<h6>Trips: {passenger.trips}</h6>
						</li>
		  		)) */}
    		</ul>
    		<br/>
    		<button
    			onClick={() => {
    				setSize(size + 1)
    				console.log(size)
    			}}
    			className='btn btn-primary'>
    			Load More
    		</button>
    	</main>
    </>
  )
}

