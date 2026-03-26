import { NavLink } from "react-router";

export default function Links() {
  return (
    <div className=" items-center justify-between gap-13.5 sm:flex hidden">
        <div>
          <NavLink to={'/'}  className={({ isActive }) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Menu</NavLink>
        </div>
        <div>
          <NavLink to={'/blog'} className={({isActive}) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold" )}>Blog</NavLink>
        </div>
        <div>
          <NavLink to={'/pricing'} className={({isActive}) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Pricing</NavLink>
        </div>
        <div>
          <NavLink to={'/contact'} className={({isActive}) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Contact</NavLink>
        </div>
    </div>
  )
}
