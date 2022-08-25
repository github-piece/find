import Link from "next/link";

const Footer = () => (
  <footer className="text-center text-sm text-gray-400 p-5">
    <Link href={"https://findlabs.org/privacy"}>Privacy Policy</Link>
    <span className="mx-3">&middot;</span>
    <Link href={"https://findlabs.org/terms"}>Terms of Service</Link>
  </footer>
)

export default Footer