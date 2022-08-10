import { useSession } from "next-auth/react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  return (
    <>
      <Navbar />
      <div className="flex mx-auto w-full max-w-lg text-center h-[calc(100vh-160px)] items-center">
        <div className="mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AuthLayout