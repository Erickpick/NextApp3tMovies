import "./Text.css"

async function getData() {
  const res = await fetch("https://65b266659bfb12f6eafda7b7.mockapi.io/api/v1/movies");
 
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
 
export default async function MainMovies() {
  const data = await getData();
 

  return (
    <div className="containerMovies">
      <div className="text">Principal</div>
     <div className="containerImages">
      <img className="poster" src={data[0].imgPoster} alt={`Imagen de pelicula ${data.name}`} />
      <img className="poster" src={data[1].imgPoster} alt={`Imagen de pelicula ${data.name}`} />
      <img className="poster" src={data[2].imgPoster} alt={`Imagen de pelicula ${data.name}`} />
      <img className="poster" src={data[3].imgPoster} alt={`Imagen de pelicula ${data.name}`} />
      </div>
    </div>
  );
}
  
