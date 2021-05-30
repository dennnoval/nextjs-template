import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    	<Link href="/">
				<a className="navbar-brand">Brand</a>
			</Link>
			<div id="navbarNav">
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

