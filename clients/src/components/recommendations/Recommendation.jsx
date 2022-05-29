import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./recommendation.scss";
import Card from "./Card"
import movie_local from './datam.json'
import initiald from '../inititald.json'
import logo_for from '.././logo_for.png'
// import fs from 'fs';


export default function Recommendation() {
  
 const[toSearch, setToSearch] = useState("");
 const[movieID, setMovieID]=useState();
 const[cole, setCole]=useState(initiald);
 const[text, setText]=useState('');
 const [suggestion, setSuggestion] = useState('');
 function handleChange(toSearch){
  // setToSearch(toSearch)
   //for autocomplere
   let matches=[];
  
   if (toSearch.length>0) {
            matches=movie_local.filter(user => {
              const regex = new RegExp(`${toSearch}`, 'gi');
              return user.title.match(regex)
            })
           // console.log(matches)
   }
   
    setSuggestion(matches)
   setToSearch(toSearch)
 }

  var datas = [];
  var movie_id=[];

  function handleClick(e){
   
    axios.post('http://127.0.0.1:5000/recms', {
        movie_title: toSearch
    })
    .then( async function (response) {

      var api_recom = await response.data.rec_movie
      
      var found_movie =[];
      if(api_recom!='Movie not found'){
        console.log(api_recom)
          api_recom.forEach(findFunc)
          function findFunc(res_title){
            found_movie = movie_local.filter((obj)=>obj.title===res_title);
            datas.push(found_movie[0])   
        }
      
      }
      else{
        console.log("movienotfound")
        alert("Movie not found")
      }
      for (let j = 0; j < 10; j++) {
       
        movie_id.push('https://api.themoviedb.org/3/movie/'+datas[j].tmdbId+'?api_key=35d8aac3bae49504fe7837fd16f79d2d&language=en-US');
      }
      setMovieID(movie_id);
     // console.log(movie_id)
  })
  .catch(function (error) {
    console.log(error);
  });
  
  //for fetching posters
  // setTimeout(() => {
  
  axios.all(movieID.map((endpoint)=> axios.get(endpoint)))
  .then(async function(datae)
  {
    var fetch_data = await datae
    setCole(fetch_data)
  }
  
  )
  .catch(function (error) {
          console.log(error);
        });
// }, 2000);
   

  }


  //     axios.get('https://api.themoviedb.org/3/movie/111?api_key=35d8aac3bae49504fe7837fd16f79d2d&language=en-US', {
  //     })
  //     .then(function (response) {
        
  //       for (let i = 0; i < 20; i++) {
  //         datacole.push(response.data.poster_path)
         
  //       }
       
  //       setCole(datacole);
  //       // console.log(cole)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   }
    // console.log(cole);
 

const cards = cole.map(item => {
    return (
        <Card 
            img={item.data.poster_path}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
             homepage={item.data.homepage}
             title={item.data.title}
             runtimei={item.data.runtime}
             summary={item.data.overview}
             vote_average={item.data.vote_average}
             vote_count={item.data.vote_count}
             release_date={item.data.release_date}
             genres={item.data.genres[0].name}
            
            // price={item.price}
        />
    )
})
// suggestion

const onSuggesthandler=(toSearch) =>{
  setToSearch(toSearch);
  setSuggestion([]);
}
  const navi = useNavigate();
    function tohomepage(){
      navi('/')
    }
    
    // const fileName = '../inititald.json';
    // const file = require(fileName);
        
    // file.key = "new value";
        
    // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    //   if (err) return console.log(err);
    //   console.log(JSON.stringify(file));
    //   console.log('writing to ' + fileName);
    // });


     
  return (
    <div>
    
    <div className="recom_container">
      <div className="top_recom">
        <div onClick={tohomepage} className="wrapper_recom">
          <img
            className="logo_recom"
            src={logo_for}
            alt=""
          />
          
        </div>
      </div>
      
      <div className="container_head_recom">
        {/*
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Love Binge Watching ? Here are we Just Enter Any Movie.
        </p> */}
          <h1>Unlimited movies, TV shows, and more.</h1>
       
          <div className="input_recom">
            <input type="text" onChange={e => handleChange(e.target.value)} name="toSearch" value={toSearch} />
           
          
            <button className="registerButton_recom" onClick={handleClick} >
              Fetch
            </button>
          
            {/* <button onClick={handleget}>handleget</button> */}
          
          </div>
          
          <button className="goahead" onClick={handleClick} >
              Go Ahead
            </button>
          <div className="suggestion_box">
          {suggestion && suggestion.map((suggestion,i)=>
              <div onClick={()=>onSuggesthandler(suggestion.title)} className="suggestions" key={i}>{suggestion.title}</div>
            )}
            </div>
      </div>
    {/* displaylng cards */}
     

    </div>

    <section>
           <div style={{}} className="card_container">
          {cards}  
         
           </div>
      </section>
    </div>
    
  )
}
