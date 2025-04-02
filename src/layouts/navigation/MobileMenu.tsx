import {useState} from "react";
import { useActivityContext } from "@/contexts/Activity-context"
import { useLocalStorage } from "@/features/chart/hooks/useLocalStorage";
import { Activities } from "./Activities";

export const MobileMenu = () => 
{
    const [showActivity, setShowActivity] = useState<boolean>(false);
    const {pie, setPie} = useActivityContext();
    useLocalStorage({pie, setPie});

    return (
        <ul className="navbar__mobile">
            <li className={`flex justify-between items-center ${showActivity ? "pb-6" : "pb-0"}`}>
                <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742462831/burger_j3ta26.svg" alt="Burger icon" 
                    className="w-6 h-6" onClick={(() => setShowActivity(true))}/>
                    <ul>
                        <li className="text-white text-lg">
                            <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742467010/biceps-flexed_qqdekz.svg" alt="Calorix slogan" 
                                className="w-10 h-10 mx-auto inline mr-2 mb-2"/>Calorix   
                        </li>
                    </ul>                  
                    {showActivity ? <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742464893/close_tr3bug.svg" alt="Close icon" 
                        className="w-6 h-6" onClick={(() => setShowActivity(false))}/> : null
                    }
            </li>
            {showActivity ? <Activities amount={pie.length} /> : null}
        </ul>
    )
}