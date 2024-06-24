import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../Redux/Actions';

function ProductForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            id: Date.now(),
            title,
            price,
            img,
        }
        console.log(newProduct);

        dispatch(addProduct(newProduct))
        navigate('/all-products')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Image</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <button type='submit'>Add</button>
        </form>
    );
}

export default ProductForm;
