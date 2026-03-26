import { NavLink } from "react-router";

export default function Sidebar({ isOpen }) {
    return (
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-200 transform transition-transform duration-300 text-center
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="mt-10">
                <NavLink to={'/'} className={({ isActive }) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Menu</NavLink>
            </div>
            <div className="mt-3">
                <NavLink to={'/blog'} className={({ isActive }) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Blog</NavLink>
            </div>
            <div className="mt-3 mb-3">
                <NavLink to={'/pricing'} className={({ isActive }) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Pricing</NavLink>
            </div>
            <div>
                <NavLink to={'/contact'} className={({ isActive }) => (isActive ? "text-violet-700 text-lg font-bold" : "text-gray-400 text-[16px] font-bold")}>Contact</NavLink>
            </div>
        </div>
    )
}
