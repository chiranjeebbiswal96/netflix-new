import React, { useEffect, useState } from "react";
import './App.css'
import Axios from "axios"
import { Api_key } from "./Api";
import { imgUrl } from "./Api";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
function Action() {
    const [actionData, setactionData] = useState([])
    const[myId,setmyId]=useState([])
  useEffect(function () {
        Axios.get(`https:api.themoviedb.org/3/discover/movie/?api_key=${Api_key}&with_genres=28`)
            .then(function (output) {
                setactionData(output.data.results)
                console.log(output.data.results)
            })
            .catch(function (error) {
                console.log(error)

            })
           
            
    }, [])
    function handleFunc(movieData){
        console.log(movieData)
        const movieName=movieData.name
        movieTrailer(movieName)
            .then(function(output){
                setmyId(new URLSearchParams(new URL(output).search).get("v"))

            })
            .catch(function(error){
                console.log(error)
            })
    return (
        <>
        <h2 style={{color:"white"}}>Action Movies</h2>
        <div className="rmnc">
           { actionData.map((info)=>{
            
                return (<img  width="200px" height="200px" src={imgUrl+info.poster_path } alt=""onClick={()=>handleFunc(info)}/>)
            })}
        </div>
        <div>
           {myId?<Youtube videoId={myId}/>:null} 

        </div>
        </>

    );
}
}
export default Action;