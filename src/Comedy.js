import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { Api_key } from "./Api";
import { imgUrl } from "./Api";

function Comedy() {
  const [comedyData, setcomedyData] = useState([]);

  useEffect(function () {
    Axios.get(
      `https:api.themoviedb.org/3/discover/movie/?api_key=${Api_key}&with_genres=35`
    )
      .then(function (output) {
        setcomedyData(output.data.results);
        console.log(output.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 style={{ color: "white" }}>Comedy Movies</h2>
      <div className="item_wrapper">
        {comedyData.map((info) => {
          return (
            <img
              width="200px"
              height="200px"
              src={imgUrl + info.poster_path}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
}

export default Comedy;
