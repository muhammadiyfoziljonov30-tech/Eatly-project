
export default function Chicken() {
  return (
    <div className="flex items-end justify-between max-w-39 hover:shadow-xl">
        <div className="flex items-center gap-2">
            <div>
                <img src="Food.png" alt="chicken" className="w-10"/>
            </div>
            <div>
                <h1 className="text-[8px] font-semibold text-[#323142]">Chicken Hell</h1>
                <p className="text-[5px] text-[#323142] mt-0.5">On The Way</p>
            </div>
        </div>
        <p className="text-[#ACADB9] text-[5px]">3:09 PM</p>
    </div>
  )
}
