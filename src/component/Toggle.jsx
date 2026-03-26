import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
export default function Toggle({isOpen, setIsOpen}) {
    function toggle() {
        setIsOpen(!isOpen)
    }
  return (
    <div className="cursor-pointer">
      { isOpen ? (<IoCloseOutline size={24} onClick={toggle}/>) :  (<IoMenuOutline size={24} onClick={toggle}/>)}
    </div>
  )
}
