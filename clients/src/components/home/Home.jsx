import Navbar from "../navbar/Navbar";

import "./home.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import initialData from "../inititald.json"




export default function Home() {
  // getRandomItem(initialData);

  // const[itemf, setItemf] = useState();

  
  var item_got = initialData[Math.floor(Math.random() * initialData.length)];
  console.log(item_got)
  


  return (
    <div className="home">
      <Navbar />
      
<div class="movie-card">
  
  <div class="container_jumbo">
    
    <a href="#"><img src={`https://image.tmdb.org/t/p/original/${item_got.data.poster_path}`} alt="cover" class="cover" /></a>
        
    <div class="hero" style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${item_got.data.backdrop_path}`})` }}>
            
      <div class="details">
      
        <div class="title1">{item_got.data.title}<span>{item_got.data.runtime}</span></div>
  
        <div class="title2">{item_got.data.tagline}</div>    
        
        <fieldset class="rating">
    {/* <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" checked /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label> */}
  </fieldset>
        
        <span class="likes">{item_got.data.vote_count}</span>
        
      </div> 
      
    </div> 
    
    <div class="description">
      
      <div class="column1">
        <span class="tag">{item_got.data.genres[0].name}</span>
        <span class="tag">{item_got.data.genres[1].name}</span>
       
      </div> 
      
      <div class="column2">
        
        <p>{item_got.data.overview} <a href={item_got.data.homepage}> Go Ahead to read more</a></p>
        
      
        
      </div> 
    </div> 
    
   
  </div>
  </div> 
    </div>
  );
};

