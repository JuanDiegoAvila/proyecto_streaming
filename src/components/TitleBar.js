import './TitleBar.css';

export default function TitleBar({name, subscription}){
    
    return (
        <div className="title-bar">
           
           <h1>Proyecto Streaming</h1>

           <div className= "right-items">

            <button onClick={()=> {console.log("search")}}><img src ="/img/search.png"/></button>
            <button><img src ="/img/user.png"/></button>
            <div className = 'user-info'>
                <h1>{name}</h1>
                <p>{subscription}</p>
            </div>

           </div>
           
        </div>
    )
}