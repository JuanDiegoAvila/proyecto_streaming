
import './Body.css';

import ContentHome from './ContentHome'
import Modal from './Modal'

export default function Body({name, modal, setModal}){
    console.log(modal)
    return (
        <div className="body">
            {modal  && <Modal name={name} setModal={setModal}/>}
            <ContentHome name={"Visto"}/>
            <ContentHome name={"Viendo"}/>
            <ContentHome name={"Sugerencias"} />
        </div>
    )
}