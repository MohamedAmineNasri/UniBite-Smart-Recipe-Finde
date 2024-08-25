import { Heart, Home } from "lucide-react"
import { Link } from "react-router-dom"

const DeskTopSideBar = () => {
  return (
    <div className=" p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
            <img src="/logo.png" alt="logo" className="hidden md:block"/>
            <img className="block md:hidden" src="/Mobile-logo.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-8">
            <Link to={'/'}>
                <Home size={'24'} />
                <span className="font-bold hidden md:block">Home</span>
            </Link>
            <Link to={'/favorites'}>
                <Heart size={'24'}/>
                <span className="font-bold hidden md:block">Favorite</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default DeskTopSideBar