import FoodBar from "../component/FoodBar";
import Reputation from "../component/Reputation";
import Sidebar from "../component/Sidebar";
import Button from "../UI/Button";

export default function Header() {
    return (
        <section className="relative">
            <div className="container">
                <div>
                    <div className="pt-14">
                        <p className="font-semibold text-[10px] flex items-center gap-3 justify-center">
                            <svg width="34" height="1" viewBox="0 0 34 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.308437" x2="33.2924" y2="0.308437" stroke="#201F1F" strokeWidth="0.616525" />
                            </svg>
                            OVER 1000 USERS
                        </p>

                        <h1 className="text-[46px] font-semibold leading-120% -tracking-1.85px text-center">
                            Enjoy Foods Over <span className="text-violet-700">World</span>
                        </h1>

                        <p className="opacity-60 font-semibold text-[12px] text-center mt-4">
                            Eatly help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early.
                            Get a <span className="text-violet-700 hover:underline cursor-pointer">$20 bonus.</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="flex items-center gap-3.5 justify-center">
                            <Button classname='hover:bg-violet-700 hover:text-white cursor-pointer'>
                                Get Started
                            </Button>
                            <Button classname='hover:bg-violet-700 hover:text-white cursor-pointer'>
                                Go Pro
                            </Button>
                        </div>
                        <Reputation />
                    </div>

                    <div className="mt-24">
                        <FoodBar />
                    </div>
                </div>


            </div>
            {/* <div className="absolute -top-27">
                <Sidebar />
            </div> */}
        </section>
    )
}
