import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct';
import AllProduct from './Pages/AllProduct';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/add-product'>Add</Link>
                    </li>
                    <li>
                        <Link to='/all-products'>All</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/all-products' element={<AllProduct/>} />
            </Routes>
        </div>
    );
}

export default App;
