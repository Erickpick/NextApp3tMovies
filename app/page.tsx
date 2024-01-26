import Image from "next/image";
import SearchBotton from "@/components/SearchBotton";
import NavBar from "@/components/NavBar";
import NewPlaylist from "@/components/NewPlaylist";
import ComingSoon from "@/components/ComingSoon";
import TopMovies from "@/components/TopMovies";
import MainMovies from "@/components/MainMovies";

async function getData() {
  const res = await fetch("https://65b1f2549bfb12f6eafc6e2f.mockapi.io/api/v1/movies");

 
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
 
export default async function Home() {
  
 
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchBotton/>
            <MainMovies/>
            <TopMovies/>
            <NewPlaylist/>
            <ComingSoon/>
            <NavBar/>
    </main>
  )
}



