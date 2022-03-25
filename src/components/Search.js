import './Search.css';

import Modal from './Modal'
import {useState} from 'react'

export default function Search({name, modal, setModal}){

    const [title, setTitle] = useState('')
    
    const resetForm = () => {
        setTitle('')
    }

    return (
        <div className="body">
            {modal  && <Modal name={name} setModal={setModal}/>}
            <label className='search'>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                />
            </label>
        </div>
    )
}