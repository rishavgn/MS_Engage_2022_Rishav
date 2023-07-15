
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import BookmarkCard from './BookmarkCard';

export default function Bookmark() {

  const [user, setUser] = useState();
  const [bookmark_data, setBookmark_data]=useState();
  const[cole, setCole]=useState();

  const localdata = localStorage.getItem("user");
   const id = localdata.slice(31,55)
 
  const sendRequest = async () => {
    const res = await axios
      .get(`/api/v1/bookmark/getfavlist/`)
      .catch((err) => console.log(err));
      alert("Fetched");
    const data = await res.data.bookmarked;
    console.log(data)
    
    setBookmark_data(data);
    return data;
  };
  console.log(bookmark_data[0].movie_id[0])
  var movie_ids =[];
  for (let j = 0; j < bookmark_data.length; j++) {
       
    movie_ids.push('https://api.themoviedb.org/3/movie/'+bookmark_data[j].movie_id[0]+'?api_key=35d8aac3bae49504fe7837fd16f79d2d&language=en-US');
  }
console.log(movie_ids)

axios.all(movie_ids.map((endpoint)=> axios.get(endpoint)))
.then(async function(datae)
{
  var fetch_data = await datae
  console.log(fetch_data)
  setCole(fetch_data)
}

)
.catch(function (error) {
        console.log(error);
      });



  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  // console.log(user);

  

//   const cards = cole.map(item => {
//     return (
//         <BookmarkCard
//             img={item.data.poster_path}
//             // rating={item.stats.rating}
//             // reviewCount={item.stats.reviewCount}
//              homepage={item.data.homepage}
//              title={item.data.title}
//              runtimei={item.data.runtime}
//              summary={item.data.overview}
//              vote_average={item.data.vote_average}
//              vote_count={item.data.vote_count}
//              release_date={item.data.release_date}
//              genres={item.data.genres[0].name}
            
//             // price={item.price}
//         />
//     )
// })
  return (
    <div>
       <section>
           <div style={{color:"white"}} className="card_container">
          {/* {cards}  
          */}

          hiiii
           </div>
      </section>
    </div>
  )
}
