import Link from 'next/link'
import { useEffect, useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
const Header = () => {
    const [isScrolled,setIsScrolled]= useState(false)
    useEffect(()=>{
      const handScroll = ()=>{
        if(window.scrollY > 0){
           setIsScrolled(true)

        }else{
            setIsScrolled(false)
        }
      }
      window.addEventListener('scroll',handScroll)

      return ()=>{
        removeEventListener('scroll',handScroll)
      }
    },[])
  return (
   <header className={`${isScrolled && 'bg-[#141414]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain"/>

       <ul className="hidden space-x-4 md:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">Tv Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List</li>
       </ul>

    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
        <BiSearchAlt2  className='hidden h-6 w-6 sm:inline'/>
        <p className='hidden lg:inline'>Kids</p>
        <BsBell className='h-6 w-6 '/>
        <Link href="/account">
            <img src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded'/>
        </Link>
 
    </div>

   </header>
  )
}

export default Header