import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status !== 'authenticated') return <></>

  return (
    <div>{children}</div>
  )
}

export default BasicLayout