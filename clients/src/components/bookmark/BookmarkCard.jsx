import React from "react"
import "./bookmarkcard.scss"

export default function BookmarkCard(props) {
   
    return (
        <div>
<div class="containercard">
  <div class="cellphone-container">    
      <div class="movie">       
        <div class="menu"><i class="material-icons"></i></div>
        <div class="movie-img">
        <img src={`https://image.tmdb.org/t/p/original/${props.img}`} />
        </div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>{props.title}</h1>
              <ul class="movie-gen">
                <li>PG-13  /</li>
                <li>{props.runtimei} mins</li>
                <li>{props.genres} </li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
            <div class="col2">
               <ul class="movie-likes">
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">{props.summary} </p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">{props.release_date}</p>
            </div>
          </div>
          <div class="mr-grid action-row">
            
          
            
            
          </div>
        </div>
      </div>
  </div>
</div>
<a href="https://dribbble.com/geehm" target="_blank">
  <img class="dribbble-link" src={`https://image.tmdb.org/t/p/original/${props.img}`}/>
</a>



</div>

    )
}



