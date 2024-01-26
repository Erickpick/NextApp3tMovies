export const Render = ({ actor }:any) => {
    console.log(actor.name)
    return (
      <div className="cast">
        <div className="container">
          <img src={actor.imgPoster} alt={`Imagen del actor ${actor.name}`} />
        </div>
      </div>
    );
  };