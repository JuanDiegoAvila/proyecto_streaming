import {useEffect, useState} from "react"
import './ContentHome.css';

export default function ContentHome({name}){

    const [movies, setMovies] = useState([{id:1},{ id:2 }, {id: 3},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1}])

    /* fetch de bases de datos de las peliculas */
    
    return (
        <div className="content-home">

           <h1>{name}</h1>
           <hr></hr>

           <div className="movies">
            {
                movies.map( (movie) => 
                    <div className ="movie" key={movie.id}/>
               )

                    
                
            }
           </div>
        </div>
    )
}