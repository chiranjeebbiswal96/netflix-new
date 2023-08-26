import React, { useEffect, useState } from "react";
import './App.css'
import Axios from "axios"
import { Api_key } from "./Api";
import { imgUrl } from "./Api";

function Tvshows() {
    const [tvshows, setTvshows] = useState([])
    
   useEffect(function () {
        Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}`)

            .then(function (output) {
                setTvshows(output.data.results)
                console.log(output.data.results)
            })
            .catch(function (error) {
                console.log(error)

            })
            
            
    }, [])
     
    return (
        <>
        <h2 style={{color:"white"}} > Tv Shows</h2>
        <div className="rmnc">
           { tvshows.map((info)=>{
            
                return (<img  width="200px" height="200px" src={imgUrl+info.poster_path } alt=""/>)
            })}
        </div>
       
        </>

    );
}



export default Tvshows;