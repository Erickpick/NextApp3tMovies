import { Key } from "react";
import "./Text.css"

async function getData() {
  const res = await fetch("https://65b266659bfb12f6eafda7b7.mockapi.io/api/v1/movies");
 
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
 
export default async function ComingSoon() {
  const data = await getData();
  
  return (
    
    <div className="containerMovies">
         <div className="text">Comedia </div>
         <div className="containerImages">
    {data.map((item: {
        category: any; tags: String; imgPoster: string | undefined; name: any; 
}, index: Key | null | undefined) => (
      <div key={index} >
        
        {item.category[0] === "Comedia" && (
          <img
            className="poster"
            src={item.imgPoster}
            alt={`Imagen de película ${item.name}`}
          />
        )
        }

        {item.category[1] === "Comedia" && (
          <img
            className="poster"
            src={item.imgPoster}
            alt={`Imagen de película ${item.name}`}
          />
        )
        }
        {item.category[2] === "Comedia" && (
          <img
            className="poster"
            src={item.imgPoster}
            alt={`Imagen de película ${item.name}`}
          />
        )
        }

        {}
      </div>
      
    ))}
    </div>
  </div>
  );
}
  