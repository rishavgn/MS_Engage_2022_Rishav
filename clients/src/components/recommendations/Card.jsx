import React from "react"
import "./card.scss"

export default function Card(props) {
   
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




</div>





        // <div className="card">
        //     <img src={`https://image.tmdb.org/t/p/original/${props.img}`} className="card--image" />
        //     {/* <div className="card--stats">
        //         <img src="../images/star.png" className="card--star" />
        //         <span>{props.rating}</span>
        //         <span className="gray">({props.reviewCount}) • </span>
        //         <span className="gray">{props.location}</span>
        //     </div>
        //     <p>{props.title}</p>
        //     <p><span className="bold">From ${props.price}</span> / person</p> */}
        // </div>
    )
}



