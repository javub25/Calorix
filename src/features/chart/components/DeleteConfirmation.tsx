
import { deleteSport } from "@/features/chart/utils/sport/deleteSport";
import confirm from "@/assets/svg/confirmation.svg"
import cancel from "@/assets/svg/cancel.svg"
import { DeleteConfirmationType } from "@/features/chart/types/Pie.ts";

export const DeleteConfirmation = ({sport, setPie, setSportToDelete}: DeleteConfirmationType) => 
{
    const CancelConfirmation = () => setSportToDelete(null);
    
    return (
        <ul className="flex items-center justify-between w-full">
            <li>
                <span className="text-sm text-black">Eliminar {sport}?</span>                
            </li>
            <li className="flex space-x-2 items-center">
                <button onClick={() => deleteSport({ sport, setPie })}>
                    <img src={confirm} alt="Confirmation icon" className="w-7 h-7"/>
                </button>

                <button onClick={CancelConfirmation}>
                    <img src={cancel} alt="Cancel icon" className="w-8 h-8" />
                </button>
            </li>
        </ul>                                 
    )
}