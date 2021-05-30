import '../styles/Home.module.css'
import { Navbar } from '../components'
import { usePagination } from "../hooks"

export default function Home() {
  const { pageData, error, size, setSize, isLoadingMore, isReachingEnd } = usePagination()

  if (error) return (<h4> Failed to load</h4>)
  if (!pageData) return (<h4> Loading...</h4>)
  
  return (
  	<>
  		<Navbar/>
    	<main id='Home'>
    		<h1 className='text-danger'>Home Page</h1>
    		<ul className='list-group'>
		  		{pageData.map(passenger => (
		  			<li key={passenger.data[0]._id} className='list-group-item'>
							<h6>ID: {passenger.data[0]._id}</h6>
							<h6>Name: {passenger.data[0].name}</h6>
							<h6>Trips: {passenger.data[0].trips}</h6>
						</li>
		  		))}
    		</ul>
    		<br/>
    		<button
    			onClick={() => setSize(size + 1)}
          disabled={isLoadingMore || isReachingEnd}
    			className='btn btn-primary'>
    			{isLoadingMore
            ? "Loading..."
                : isReachingEnd
                ? "No more posts"
                    : "Load more"}
    		</button>
        {console.log(pageData)}
    	</main>
    </>
  )
}
