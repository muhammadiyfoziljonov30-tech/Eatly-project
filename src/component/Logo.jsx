import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to={'/'} className="flex items-center gap-2">
        <div>
            <img src="Logo.png" alt="logo" />
        </div>
        <p className="text-[15px] font-bold text-violet-700 font-poppins">eatly</p>
    </Link>
  )
}
