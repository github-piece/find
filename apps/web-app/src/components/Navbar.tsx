import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  
  let auth = 'Join'
  if (router.pathname === '/register') auth = "Login" 

  const handleAuth = () => {
    router.push(auth === 'Join' ? '/register' : '/login')
  }
  return (
    <nav className="p-5 flex justify-between">
      <div className="flex">
        <Link href={"/"}>
          <div className="mr-4 cursor-pointer">Learn more</div>
        </Link>
        <Link href={"/"}>
          <div className="mr-4 cursor-pointer">Help</div>
        </Link>
      </div>
      <div className="flex">
        <img src="/logo.svg" alt="logo" />
        <div className="text-bold text-xl my-auto ml-3">find</div>
      </div>
      <div className="flex">
        <div className="text-sm text-gray-500 my-auto mr-4">{auth === 'Join' ? 'Don\'t have an account' : 'Already have an account?'}</div>
        <button onClick={handleAuth} className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-bold py-1 px-3 rounded">
          {auth}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
