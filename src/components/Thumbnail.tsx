import Image from "next/image"
import { Movie } from "../../typing"
interface Props{
    movie:Movie
}
const Thumbnail = ({movie}:Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.backdrop_path}`} fill className="rounded-sm object-cover md:rounded" alt="thumbnailimage"/>
    </div>
  )
}

export default Thumbnail