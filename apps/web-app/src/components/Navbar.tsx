import Link from "next/link"
import { useRouter } from "next/router"
import ThemeSelectButton from "./ThemeSelectButton"
import classNames from "classnames"
import { useTheme } from "next-themes"

const Navbar = () => {
  const router = useRouter()
  const { theme } = useTheme()
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false'
  let auth = 'Join'
  if (['/join', '/waitlist'].includes(router.pathname)) auth = "Login" 

  const handleAuth = () => {
    router.push(auth === 'Join' ? isWaitlist ? '/waitlist' : '/join' : '/login')
  }

  return (
    <nav className={classNames("p-5 flex justify-between", theme)}>
      <div className="flex">
        <Link href={"https://findlabs.org"}>
          <div className="mr-4 cursor-pointer dark:text-gray-100">Learn more</div>
        </Link>
        <Link href={"https://findlabs.org/docs"}>
          <div className="mr-4 cursor-pointer dark:text-gray-100">Help</div>
        </Link>
      </div>
      <Link href={"/"}>
        <div className="flex cursor-pointer">
          <img src="/logo.svg" alt="logo" />
          <div className="text-bold text-xl my-auto ml-3 dark:text-gray-100">find</div>
        </div>
      </Link>
      <div className="flex">
        <ThemeSelectButton />
        <div className="text-sm text-gray-500 my-auto mr-4">{auth === 'Join' ? 'Don\'t have an account' : 'Already have an account?'}</div>
        <button onClick={handleAuth} className="bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-400 hover:bg-gray-400 text-gray-800 dark:text-gray-200 text-sm font-bold py-1 px-3 rounded">
          {auth}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
