import "./NavBar.css";
import Image from "next/image";
import home from '../components/Home.png';
import ticket from '../components/Ticket.png';
import rate from '../components/Rate.png';
import login from '../components/Login.png';

export default function NavBar() {
    return <div className="navBar">
        <Image className="icon"
                    src={home}
                    alt="Picture of home"
        />
        <Image className="icon"
                    src={ticket}
                    alt="Picture of ticket"
        />
        <Image className="icon"
                    src={rate}
                    alt="Picture of rate"
        />
        <Image className="icon"
                    src={login}
                    alt="Picture of login"
        />
   </div>
}