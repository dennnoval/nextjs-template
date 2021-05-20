import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    	<Link href="/">
				<a className="navbar-brand">Brand</a>
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
				  <li className="nav-item active">
				  	<Link href="/">
				    	<a className="nav-link">Home <span className="sr-only">(current)</span></a>
				  	</Link>
				  </li>
				  <li className="nav-item">
				  	<Link href="/about">
				    	<a className="nav-link">About</a>
				    </Link>
				  </li>
				  <li className="nav-item">
				  	<Link href="/contact">
				    	<a className="nav-link">Contact</a>
				    </Link>
				  </li>
				</ul>
			</div>
		</nav>
  )
}

