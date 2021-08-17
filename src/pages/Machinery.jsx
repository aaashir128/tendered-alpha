import React from 'react';
import Sidebar from '../components/Sidebar';
import './Machinery.css'
import Quote from './Quote';

function Machinery() {
    return (
        <div className='machinery'>
            <div className='sidebar'>
            <Sidebar />
            </div>

            <div className='body'>
                <Quote />
            </div>


        </div>
    )
}

export default Machinery
