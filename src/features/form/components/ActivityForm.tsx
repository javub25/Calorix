import {
    Input, Card, CardContent, CardHeader, CardTitle,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/features/form/utils/shadcn/index.ts"

import Women from "@/assets/svg/women.svg"
import Men from "@/assets/svg/men.svg"
import WeightIcon from "@/assets/svg/weight.svg"
import ActivityIcon from "@/assets/svg/activity.svg"

import { FormData, ActivityProps } from "@/features/form/types/Activity.ts"
import { useSelectedGender } from "@/features/form/hooks/useSelectedGender.ts"
import { useWeight } from "@/features/form/hooks/useWeight.ts"
import { useFormData } from "@/features/form/hooks/useFormData.ts"
import { changeActivity } from "@/features/form/utils/activity/changeActivity.ts"
import { changeGender } from "@/features/form/utils/gender/changeGender.ts"
import { isGenderSelected } from "@/features/form/utils/gender/isGenderSelected.ts"
import { getCurrentWeight } from "@/features/form/utils/weight/getCurrentWeight.ts"
import { getCalories } from "@/features/form/utils/calories/getCalories"
import { updatePie } from "@/features/chart/utils/updatePie.ts"

export const ActivityForm = (props: ActivityProps) => 
{
    const {type, setType, setPie} = props
    const {SelectedGender, setSelectedGender} = useSelectedGender();
    const {weight, setWeight, weightRef} = useWeight();
    const {register, handleSubmit, Controller, control} = useFormData();
    
    const {genderSelected} = isGenderSelected({SelectedGender});

    const onSubmit = (data: FormData) => 
    {
        const {newActivity} = getCalories(data);
        updatePie({newActivity, setPie});
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="activity-form__header flex justify-evenly items-center w-[390px] mx-auto">
                        <img src={ActivityIcon} alt="Activity Icon" className="w-7 h-7 align-top" />
                        <CardTitle className="text-center text-xl text-wrap">Registra tu actividad deportiva</CardTitle>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="sex" className="px-2">Sexo <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741171906/asterisk-svgrepo-com_yuvcny.svg" className="w-2 h-2 inline ml-1 mb-2" alt="Sex required"/></label>
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
                                        <Input type="radio"
                                            {...register("sex", {
                                                onChange: (e) => changeGender({e, setSelectedGender}),
                                            })}
                                            value="men"
                                            className="w-[18px] shadow-none" />
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
                                        <Input type="radio"
                                            {...register("sex", {
                                                onChange: (e) => changeGender({e, setSelectedGender})
                                            })}
                                            value="women"
                                            className="w-[18px] shadow-none" />
                                    </div>
                                </div>
                                
                                <div className={`relative ${genderSelected ? "pt-8 pb-6" : "py-0"} px-2`}>
                                    <label htmlFor="weight">Peso </label>
                                    
                                           <span className={`form-activity__weight-label ${genderSelected ? "mt-6" : "mt-0"}`}>{weight} kg</span>
                                                <Input id="weight" type="range"
                                                    min="30" max="200"
                                                    {...register("weight", {
                                                        onChange: (e) => getCurrentWeight({e, setWeight, weightRef}),
                                                        setValueAs: value => parseInt(value),
                                                    })}
                                                    defaultValue="30"
                                                    placeholder="Tu peso en (kg)" 
                                                    className="shadow-none mt-4"                                                    
                                                />
                                        
                                                <div className="form-activity__weight-range">
                                                    <span>30 kg</span>
                                                    <img src={WeightIcon} alt="WeightIcon" className="w-5 h-5"/>
                                                    <span>200 kg</span>
                                                </div>
                                    </div>

                                    <div className="py-6 px-2">
                                        <label htmlFor="sport">¿Que deporte prácticas?
                                            <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741171906/asterisk-svgrepo-com_yuvcny.svg" className="w-2 h-2 inline ml-1 mb-2" alt="Sport required"/>                                        
                                        </label>
                                        <div className="mt-2">
                                            <Controller 
                                                name="sport"
                                                control={control}
                                                defaultValue=""
                                                render={({field: {onChange, value}}) => (
                                                    <Select onValueChange={onChange} value={value}>                                   
                                                        <SelectTrigger id="sport">
                                                            <SelectValue placeholder="Selecciona un deporte" />
                                                        </SelectTrigger>

                                                        <SelectContent >
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
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {type === "Semanal" ?
                                        <div className={`${type === "Semanal" ? "pt-0 pb-6" : "py-6"} px-2`}>
                                            <label htmlFor="weekDays">Frecuencia semanal <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741171906/asterisk-svgrepo-com_yuvcny.svg" className="w-2 h-2 inline ml-1 mb-2" alt="WeekDays required"/>
                                            </label>
                                            <div className="mt-2">
                                                <Input id="weekDays"
                                                    {...register("weekDays")} 
                                                    type="number" 
                                                    placeholder="Días"
                                                    min={1} max={7} />
                                            </div>
                                        </div> : null}
 
                                    <div className="pb-6 px-2">
                                        <label htmlFor="intensity">Nivel de Intensidad <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741171906/asterisk-svgrepo-com_yuvcny.svg" className="w-2 h-2 inline ml-1 mb-2" alt="Intensity required"/></label>
                                            <div className="mt-2">
                                                <Controller 
                                                    name="intensity"
                                                    control={control}
                                                    render={({field: {onChange, value}}) => (
                                                        <Select onValueChange={onChange} value={value}>
                                                            <SelectTrigger id="intensity">
                                                                <SelectValue placeholder="Selecciona la intensidad" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="low">Baja 🔥 (sin mucho esfuerzo)</SelectItem>
                                                                <SelectItem value="medium">Media ⚡ (moderado)</SelectItem>
                                                                <SelectItem value="high">Alta 💥 (mucho esfuerzo)</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                />
                                            </div>
                                    </div>
                            
                                    <div className="pb-6 px-2">
                                        <label htmlFor="minuts">Minutos <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741171906/asterisk-svgrepo-com_yuvcny.svg" className="w-2 h-2 inline ml-1 mb-2" alt="Minuts required"/></label>
                                            <div className="mt-2">
                                                <Input id="minuts" type="number" 
                                                    {...register("minuts")}
                                                    placeholder="Duración en minutos"
                                                    min={1}/>
                                            </div>
                                    </div>

                                    <button type="submit" className="form-activity__update-chart">
                                        Actualizar gráfico
                                    </button>                                    
                            </form>
                        </section>
                </CardContent>
            </Card>
        </>
    )
}

