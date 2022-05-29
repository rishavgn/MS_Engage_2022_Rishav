
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import BookmarkCard from './BookmarkCard';

export default function Bookmark() {

  const [user, setUser] = useState();
  const localdata = localStorage.getItem("user");
   const id = localdata.slice(31,55)
  console.log(id)
  const sendRequest = async () => {
    const res = await axios
      .get(`/api/v1/getfavlist/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);


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
