
export default function Button({children, classname}) {
  return (
    <button className={`rounded-xl text-violet-700 font-semibold text-[13px] border border-violet-700 py-3.5 px-6 ${classname}`}> 
            {children}
    </button>
  )
}
