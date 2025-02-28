import {
    Input, Card, CardContent, CardHeader, CardTitle,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/features/form/utils/shadcn/index.ts"

import Women from "@/assets/svg/women.svg"
import Men from "@/assets/svg/men.svg"
import WeightIcon from "@/assets/svg/weight.svg"
import ActivityIcon from "@/assets/svg/activity.svg"

import { ActivityProps } from "@/features/form/types/Activity.ts"
import { useSelectedGender } from "@/features/form/hooks/useSelectedGender.ts"
import { useWeight } from "@/features/form/hooks/useWeight.ts"
import { changeActivity } from "@/features/form/utils/activity/changeActivity.ts"
import { changeGender } from "@/features/form/utils/gender/changeGender.ts"
import { isGenderSelected } from "@/features/form/utils/gender/isGenderSelected.ts"
import { getCurrentWeight } from "@/features/form/utils/weight/getCurrentWeight.ts"

export const Activity = (props: ActivityProps) => 
{
    const {type, setType} = props
    const {SelectedGender, setSelectedGender} = useSelectedGender();
    const {weight, setWeight, weightRef} = useWeight();

    const {genderSelected} = isGenderSelected({SelectedGender});

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-evenly items-center w-[390px] mx-auto max-mobile:w-full">
                        <img src={ActivityIcon} alt="Activity Icon" className="w-7 h-7 align-top" />
                        <CardTitle className="text-center text-xl">Registra tu actividad deportiva</CardTitle>
                    </div>
                </CardHeader>

                <CardContent>
                    <header className="py-2">
                        <button className="form-activity__buttons"
                            onClick={() => changeActivity({type: "Diaria", setType})}>Diaria</button>
                        <button className="form-activity__buttons"
                            onClick={() => changeActivity({type: "Semanal", setType})}>Semanal</button>
                    </header>

                    <section>
                        <form>
                            <label htmlFor="sex" className="px-2">Sexo <span className="text-red-500">*</span></label>
                                <div className={`form-activity__sex-options ${genderSelected ? "gap-[2rem]" : "gap-[0.5rem]"}`}>
                                    <div>
                                        <img src={Men} alt="Men Icon" className="w-5 h-5" />                               
                                            {SelectedGender["men"].selected ? 
                                                <>
                                                    <div className={`w-5 h-0.5 bg-blue-600 mt-[4px]`}>
                                                        <p className="text-blue-700 py-2 mt-[4px]">Masculino</p>
                                                    </div>
                                                </> : null
                                            }
                                    </div>

                                    <div>
                                        <Input type="radio" value="men" name="sex" className="w-[18px] shadow-none" 
                                            onChange={(e) => changeGender({e, setSelectedGender})} />
                                    </div>

                                    <div>
                                        <img src={Women} alt="Women Icon" className="w-5 h-5" />
                                            {SelectedGender["women"].selected ? 
                                                <>
                                                    <div className={`w-5 h-0.5 bg-blue-600 mt-[4px]`}>
                                                        <p className="text-blue-700 py-2">Femenino</p>
                                                    </div>
                                                </> : null
                                            }
                                    </div>

                                    <div>
                                        <Input type="radio" name="sex" value="women"
                                            className="w-[18px] shadow-none" onChange={(e) => changeGender({e, setSelectedGender})} />
                                    </div>
                                </div>
                                
                                <div className={`relative ${genderSelected ? "pt-8 pb-6" : "py-0"} px-2`}>
                                    <label htmlFor="weight">Peso </label>
                                    
                                           <span className={`form-activity__weight-label ${genderSelected ? "mt-6" : "mt-0"}`}>{weight} kg</span>
                                                <Input id="weight" type="range"
                                                    min="30" max="200"
                                                    defaultValue="30" 
                                                    placeholder="Tu peso en (kg)" 
                                                    className="shadow-none mt-4"
                                                    onChange={(e) => getCurrentWeight({e, setWeight, weightRef})}
                                                />
                                        
                                                <div className="form-activity__weight-range">
                                                    <span>30 kg</span>
                                                    <img src={WeightIcon} alt="WeightIcon" className="w-5 h-5"/>
                                                    <span>200 kg</span>
                                                </div>
                                    </div>

                                    <div className="py-6 px-2">
                                        <label htmlFor="sport">¿Que deporte prácticas? <span className="text-red-500">*</span></label>
                                        <div className="mt-2">
                                            <Select>                                   
                                                <SelectTrigger id="sport">
                                                    <SelectValue placeholder="Selecciona un deporte" />
                                                </SelectTrigger>
                                        
                                                <SelectContent>
                                                    <SelectItem value="Atletísmo">Atletísmo</SelectItem>
                                                    <SelectItem value="Pádel">Pádel</SelectItem>
                                                    <SelectItem value="Tenis">Tenis</SelectItem>
                                                    <SelectItem value="Natación">Natación</SelectItem>
                                                    <SelectItem value="Ciclísmo">Ciclísmo</SelectItem>
                                                    <SelectItem value="Fútbol">Fútbol</SelectItem>
                                                    <SelectItem value="Boxeo">Boxeo</SelectItem>
                                                    <SelectItem value="Yoga">Yoga</SelectItem>
                                                    <SelectItem value="Otros">Otros</SelectItem>
                                                </SelectContent>
                                            </Select>   
                                        </div>
                                    </div>

                                    

                                    {type === "Semanal" ?
                                        <div className={`${type === "Semanal" ? "pt-0 pb-6" : "py-6"} px-2`}>
                                            <label htmlFor="frequency">Frecuencia semanal <span className="text-red-500">*</span></label>
                                            <div className="mt-2">
                                                <Input id="frequency" type="number" placeholder="Días"
                                                    min={1} max={7} />
                                            </div>
                                        </div> : null}
 
                                    <div className="pb-6 px-2">
                                        <label htmlFor="intensity">Nivel de Intensidad <span className="text-red-500">*</span></label>
                                            <div className="mt-2">
                                                <Select>
                                                    <SelectTrigger id="intensity">
                                                        <SelectValue placeholder="Selecciona la intensidad" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="low">Baja 🔥 (sin mucho esfuerzo)</SelectItem>
                                                        <SelectItem value="medium">Media ⚡ (moderado)</SelectItem>
                                                        <SelectItem value="high">Alta 💥 (mucho esfuerzo)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                    </div>
                            
                                    <div className="pb-6 px-2">
                                        <label htmlFor="duration">Duración <span className="text-red-500">*</span></label>
                                            <div className="mt-2">
                                                <Input id="duration" type="number" placeholder="Duración en minutos"
                                                    min={1}/>
                                            </div>
                                    </div>
                
                                    <button type="submit" className="form-activity__update-chart mobile:w-1/2">
                                        Actualizar gráfico
                                    </button>
                            </form>
                        </section>
                </CardContent>
            </Card>
        </>
    )
}

