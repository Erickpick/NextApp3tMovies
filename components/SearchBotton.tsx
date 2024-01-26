import "./SearchBotton.css";
import Image from "next/image";
import vector from '../components/Vector.jpg'

export default function SearchBotton() {
    return <div className="SearchButton"> 
        <div className="Lens">
        <Image
                    src={vector}
                    alt="Picture of the author"
        />            
        </div>
        <div className="Search">
        <button >Search Movie</button>
        </div>
    </div>
}