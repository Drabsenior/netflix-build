import { Movie } from "../../typing"
import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrlImg } from "@/utils/requests"
import {BsFillPlayFill} from 'react-icons/bs'
import {FiInfo} from 'react-icons/fi'
interface Props{
 netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals}:Props) => {
    const [movie,setMovie]=useState<Movie | null>(null)

    useEffect(()=>{
     setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    },[netflixOriginals])
    console.log(baseUrlImg+movie?.backdrop_path)
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end pb-12">

        <div className="absolute top-0 left-0 h-[95vh] w-screen lg:w-[100%] -z-10"> 
            <Image src={`${baseUrlImg}${movie?.backdrop_path || movie?.poster_path} `} fill style={{objectFit:'cover'}} alt="movieposter"/>
        </div>
        <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="max-w-xs text-xs md:max-w-lg text-shadow-lg lg:max-w-2xl lg:text-xl">{movie?.overview}</p>

        <div className="flex space-x-3">
            <button className="bannerButton bg-white text-black"><BsFillPlayFill className="h-5 w-5 text-black md:h-7 md:w-7"/>Play</button>
            <button className="bannerButton bg-[gray]/70">More Info<FiInfo className="h-5 w-5 md:h-8 md:w-8"/></button>
        </div>
    </div>
  )
}

export default Banner