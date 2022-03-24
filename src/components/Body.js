
import './Body.css';

import ContentHome from './ContentHome'

export default function Body(){
    
    return (
        <div className="body">
            <ContentHome name={"Visto"}/>
            <ContentHome name={"Viendo"}/>
            <ContentHome name={"Sugerencias"} />
        </div>
    )
}