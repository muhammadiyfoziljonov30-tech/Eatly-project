import { useState } from "react";
import Links from "./Links";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Toggle from "./Toggle";

export default function Navbar() {

 const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="flex items-center justify-between py-8 border-b border-b-gray-300">
        <div className="flex items-center gap-19">
          <Logo />
          <Links />
        </div>
        <div>
          <Toggle isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Sidebar isOpen={isOpen}/>
        </div>
      </div>
    </div>
  )
}
