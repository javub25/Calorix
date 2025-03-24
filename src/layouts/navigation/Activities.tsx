import {Link} from "react-router"
export const Activities = ({amount}: {amount: number}) => 
{
    return (
        <>
            <li className="flex items-center text-sm gap-2 text-white py-3">
                <Link to="/" className="flex items-center gap-2 hover:text-[#FED7AA] hover:font-bold">
                    Registrar actividad 
                    <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742460980/form_jesiww.svg" alt="Register data" 
                        className="w-6 h-6"/> 
                </Link>
            </li>
            {amount > 0 ? 
                <li className="flex text-sm gap-2 items-center text-white py-3">
                    <Link to="/tus-actividades" className="flex items-center gap-2 hover:text-[#FED7AA] hover:font-bold">
                        Tus actividades
                            <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742460709/chart-pie_unvrjv.svg" alt="Chart Pie"
                                className="w-6 h-6"/>
                    </Link>
                        <ul className="bg-red-600 px-[0.6rem] py-1 rounded-full">
                            <li>
                                <span className="text-center text-white">{amount}</span>
                            </li>
                        </ul>  
                </li>
            : null} 
        </>   
    )
}