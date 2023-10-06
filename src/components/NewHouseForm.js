import React, { useState } from 'react';
import { housesApi } from '../rest/HousesApi';
import './NewHouse.css'

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        if (name) { 
            const newHouse = { name }; // Create a new house object
            const response = await housesApi.post(newHouse); // Call the post method
            if (response) {
            }
            setName(''); // Clear the input field
        } else {
            console.log('Invalid input');
        }
    };    

    return ( 
    <div className='add'>
        <h4>Add a new house</h4>
            <form onSubmit={onSubmit}>
                <input type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <button type='submit' className='btn'>Add House</button>
            </form>
    </div>
    )
}