import React from "react"

import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from './actions'


function App() {
	const counter = useSelector(state => state.counter);
  	const logged = useSelector(state => state.logged);
  	const dispatch = useDispatch();

  	return (
		<div className="App">
		<div>	
		<header>
			<nav>
				<ul className="menu">
					<li className="logo"><img id="header-img" src="https://i.annihil.us/u/prod/marvel/oneid/static/oneid/logo.png" alt="HQ" /></li>
					<li className="item"><a href="#openModal"><i className="material-icons" title="Menu">apps</i></a></li>
				</ul>
		</nav>
		</header>
		</div>
		<div id="hero">
			<div className="search-panel hidden">
				<form method="get" action="#!/~/search/offset=0&amp;sort=relevance&amp;keywords=">
					<input className="text-field" type="search" name="keywords" value="" placeholder="Search products" />
					<input className="button" type="submit" value="" />
					<div className="loader"></div>
				</form>
		</div>
		</div>

		<section id="Designs">
			<div className="container">
				
				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: {counter}</p>
					<button onClick={() => dispatch(increment(5)) }><i class="material-icons">add_box</i></button>
					<button onClick={() => dispatch(decrement()) }><i class="material-icons">remove_circle_outline</i></button>
					{logged ? <h3>Value info I shoudn't see</h3> : ''}
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: TestProps</p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: TestProps</p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: TestProps</p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: TestProps</p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: TestProps</p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: TestProps</p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

				<div className="cards">
					<h1>TestProps</h1>
					<div id="templates"><img src="" /></div>
					<p>Ur cheet: </p>
				</div>

		</div>
		</section>

			<section id="features">

				<div className="flex-container">

					<div id="hero">
						<h2><i class="material-icons">assistant</i>How this service works - About Us</h2>
					</div>

					<div className="feature">
						<i class="material-icons">help_outline</i>
						<div className="desc">
							<h2>TestProps</h2>
							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
							<p><button className="btn">Select</button></p>
						</div>
					</div>

					<div className="feature">
						<i class="material-icons">verified_user</i>
						<div className="desc">
							<h2>TestProps</h2>
							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
							<p><button className="btn">Select</button></p>
						</div>
					</div>

					<div className="feature">
						<i class="material-icons">work</i>
						<div className="desc">
							<h2>TestProps</h2>
							<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
							<p><button className="btn">Select</button></p>
						</div>
					</div>

				</div>
			</section>
			
		<div id="hero">
		<h1>Pricing <i class="material-icons">attach_money</i></h1>
		</div>
		<section id="pricing">
		<div className="product" id="tenor">
			<div className="level">Basic</div>
				<h2>$25</h2>
				<ol>
				<li>Custom Mensal</li>
				<li>About Autors</li>
				<li>Downloadable limited</li>
				<li>Discount events</li>
				<li>Limited titles</li>
				</ol>
				<ol>
					<li><button className="btn"><i className="material-icons">add_shopping_cart</i>Select</button></li>
				</ol>

		</div>
		<div className="product" id="bass">
			<div className="level">Premium</div>
			<h2>$250</h2>
			<ol>
			<li>By year</li>
			<li>About Autors</li>
			<li>Downloadable unlimited</li>
			<li>Discount events</li>
			<li>Unlimited titles</li>
			</ol>
					<ol>
						<li><button className="btn"><i className="material-icons">add_shopping_cart</i>Select</button></li>
					</ol>
		</div>
		</section>

		<footer>
			<div className="btnList text-center">
		
				<p id="footerp"> Copyright HQ 2019. All Rights Reserved.</p>

			</div>
		</footer> 

		<div id="openModal" className="modalDialog">
	
			<div>
  
	  			<a href="#close" title="Close" className="close">X</a>
		  
	 			<ul>
	  
		  			<h2>Menu</h2>
  
					<li><a href="#top">One</a></li>
	  
					<li><a href="#top">Two</a></li>
	  
					<li><a href="#top">Three</a></li>
		
					<li><a href="#top"><i class="material-icons">account_box</i>Login</a></li>

	   			</ul>
  
  			</div>
  		</div>

	</div>
	);
	}


export default App;