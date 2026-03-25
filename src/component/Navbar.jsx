import Logo from "./Logo";
import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <div className="container">
        <div className="flex items-center justify-between py-8 border-b border-b-gray-300">
          <Logo/>
          <Toggle/>
        </div>
    </div>
  )
}
