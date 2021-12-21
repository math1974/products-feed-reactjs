import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Products from './pages/Products/Products';
import Product from './pages/Product';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'
import './button.css'
import './color.css'

const App = () => {
  return (
	<Router>
		<div className='container'>
			<div className="container__box">
				<Header />

				<Routes>
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
					<Route path="/products/:id" element={<Product />}/>
				</Routes>

				<Footer />
			</div>
		</div>
	</Router>
  );
}

export default App;
