import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Products from './pages/Products';
import Product from './pages/Product';

import './App.css'

const App = () => {
  return (
	<Router>
		<Routes>
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<Product />}/>
		</Routes>
	</Router>
  );
}

export default App;
