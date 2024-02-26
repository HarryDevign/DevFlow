import { UserButton } from "@clerk/nextjs";
import Navbar from "../../../components/Navbar";
 
export default function Home() {
  return (
    <div className="h-screen">
      <Navbar/>
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}