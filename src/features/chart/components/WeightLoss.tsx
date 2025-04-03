import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

export const WeightLoss = ({weightAmount, calories}: {weightAmount: number, calories:number}) => 
{
    return (
        <Drawer>
            <DrawerTrigger className="pie-weight__loss-trigger">
                ¡Descubre tu progreso ahora!
            </DrawerTrigger>

            <DrawerContent>
                <div className="overflow-auto">
                    <DrawerHeader className="mx-auto">
                        <DrawerTitle className="text-center text-2xl">¡Has perdido peso!</DrawerTitle>
                    </DrawerHeader>
                    
                    <article className="bg-[#0d9488] rounded-full aspect-square flex items-center justify-center mx-auto w-30 mt-4"> 
                        <DrawerDescription className="text-center font-bold text-white text-4xl">
                            {weightAmount} <span className="text-sm block">kg</span>
                        </DrawerDescription>
                    </article>

                    <article>
                        <h2 className="text-center text-lg my-4">¡Gran trabajo! Sigue avanzando 💪</h2>
                        <h3 className="text-center font-medium mb-2 text-base">Así calculamos tu pérdida de peso </h3>
                        <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741686992/info-circle-svgrepo-com_aortrz.svg" alt="Info Circle to calculate weigth loss" className="w-7 h-7 mx-auto"/>
                    </article>

                    <article>
                        <ul className="pie-weight__loss-data">
                            <li className="flex justify-between">
                                <span className="text-sm">Calorias 🔥</span>
                                <span className="font-medium text-sm">{calories} kcal</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-sm">1 kg</span>
                                <span className="font-medium text-sm">7700 calorias</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-sm">Peso perdido ⚖️</span>
                                <span className="font-medium text-sm">Calorías ÷ 7700</span>
                            </li>
                        </ul>
                    </article>
                    <DrawerFooter className="w-[11rem] mx-auto">
                        <DrawerClose className="form-activity__update-chart">Volver</DrawerClose>
                    </DrawerFooter>
                </div>    
            </DrawerContent>
        </Drawer>
    )
}