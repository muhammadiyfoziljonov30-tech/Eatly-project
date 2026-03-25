import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen)
    }
  return (
    <div>
      { isOpen ? <IoCloseOutline size={24} onClick={toggle}/> :  <IoMenuOutline size={24} onClick={toggle}/>}
    </div>
  )
}
