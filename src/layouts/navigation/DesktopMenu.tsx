import { useActivityContext } from "@/contexts/Activity-context"
import { useLocalStorage } from "@/features/chart/hooks/useLocalStorage";
import { Activities } from "@/layouts/navigation/Activities";
export const DesktopMenu = () => 
{
    const {pie, setPie} = useActivityContext();
    useLocalStorage({pie, setPie});
        
    return (
        <ul className="site-header__list">
            <li>
                <ul>
                    <li className="text-white text-md">
                        <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742467010/biceps-flexed_qqdekz.svg" alt="Calorix slogan" 
                            className="w-8 h-8 mx-auto"/>Calorix   
                    </li>
                </ul> 
            </li>
            <li className="flex justify-center">
                <ul className="flex gap-4 items-center justify-center">
                    <Activities amount={pie.length} />
                </ul>
            </li>
        </ul>
    )
}