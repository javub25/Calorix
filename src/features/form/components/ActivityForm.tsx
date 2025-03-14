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
import { useFormData} from "@/features/form/hooks/useFormData.ts"
import { changeActivity } from "@/features/form/utils/activity/changeActivity.ts"
import { changeGender } from "@/features/form/utils/gender/changeGender.ts"
import { isGenderSelected } from "@/features/form/utils/gender/isGenderSelected.ts"
import { getCurrentWeight } from "@/features/form/utils/weight/getCurrentWeight.ts"
import { getCalories } from "@/features/form/utils/calories/getCalories"
import { updatePie } from "@/features/chart/utils/pie/updatePie"

import { getSubmitFeedback } from "@/features/form/utils/SubmitFeedback/getSubmitFeedback"
import { RequiredStatus } from "@/features/form/components/RequiredStatus"
import { SubmitNotification } from "@/features/form/components/SubmitNotification"

export const ActivityForm = (props: ActivityProps) => 
{
    const {type, setType, setPie} = props
    const {SelectedGender, setSelectedGender} = useSelectedGender();
    const {weight, setWeight, weightRef} = useWeight();
    const {register, handleSubmit, Controller, control, errors, isSubmitted} = useFormData();
    
    const {genderSelected} = isGenderSelected({SelectedGender});
    const {SuccessMessage, ErrorMessage} = getSubmitFeedback();
    const {sex, sport, intensity, minuts, weekDays} = errors;

    const onSubmit = (data: FormData) => 
    {
        const {newActivity} = getCalories(data);
        updatePie({newActivity, setPie});
        SuccessMessage();
    }

    const onError = () => ErrorMessage();

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
                        <form onSubmit={handleSubmit(onSubmit, onError)}>
                            <article className="flex items-center justify-between">
                                <label htmlFor="sex" className="px-2">Sexo</label>
                                <RequiredStatus hasError={sex} isSubmitted={isSubmitted} />
                            </article>
                            
                            <article className="px-2">
                                <div className={`form-activity__sex-options ${genderSelected ? "gap-[2rem]" : "gap-[0.5rem]"}`}>
                                    <div>
                                        <img src={Men} alt="Men Icon" className="w-5 h-5" />                               
                                            {SelectedGender["men"].selected ? 
                                                <>
                                                    <div className={`w-5 h-0.5 bg-blue-600 mt-[4px]`}>
                                                        <p className="text-xs py-2 mt-[4px]">Masculino</p>
                                                    </div>
                                                </> : null
                                            }
                                    </div>

                                    <div>
                                        <Input type="radio"
                                            {...register("sex", {
                                                onChange: (e) => changeGender({e, setSelectedGender}),                                                
                                                required: '¡Marca tu sexo para personalizar tu experiencia fitness!',
                                            })}
                                            value="men"
                                            className="w-[18px] shadow-none" />
                                    </div>

                                    <div>
                                        <img src={Women} alt="Women Icon" className="w-5 h-5" />
                                            {SelectedGender["women"].selected ? 
                                                <>
                                                    <div className={`w-5 h-0.5 bg-blue-600 mt-[4px]`}>
                                                        <p className="text-xs py-2">Femenino</p>
                                                    </div>
                                                </> : null
                                            }
                                    </div>

                                    <div>
                                        <Input type="radio"
                                            {...register("sex", {
                                                onChange: (e) => changeGender({e, setSelectedGender}),
                                                required: '¡Marca tu sexo para personalizar tu experiencia fitness!'
                                            })}
                                            value="women"
                                            className="w-[18px] shadow-none" />
                                    </div>
                                </div>
                                <p className="form-activity__message-errors mb-2">{sex?.message}</p> 
                            </article>
                                                     
                            <article className={`relative ${genderSelected ? "py-6" : "py-0"} px-2`}>
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
                            </article>

                            <article className="py-6 px-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="sport">¿Que deporte prácticas?</label>
                                    <RequiredStatus hasError={sport} isSubmitted={isSubmitted}/>
                                </div>
                                
                                <div className="mt-2">
                                    <Controller 
                                        name="sport"
                                        control={control}
                                        defaultValue=""
                                        rules={{required: '¡Deporte misterioso! Selecciona uno para continuar'}}
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
                                        <p className="form-activity__message-errors mt-2">{sport?.message}</p>
                                </div>
                            </article>

                            {type === "Semanal" ?
                                <article className={`${type === "Semanal" ? "pt-0 pb-6" : "py-6"} px-2`}>
                                   <div className="flex items-center justify-between">
                                      <label htmlFor="weekDays">Frecuencia semanal</label>
                                        <RequiredStatus hasError={weekDays} isSubmitted={isSubmitted}/>
                                    </div>
                                    <div className="mt-2">
                                        <Input id="weekDays"
                                            {...register("weekDays", {
                                                required: '¡Ups! Marca los días de tu ritual fitness para seguir tu ritmo.',
                                            })} 
                                            type="number" 
                                            placeholder="Días"
                                            min={1} max={7} />
                                    </div>
                                    <p className="form-activity__message-errors mt-2">{weekDays?.message}</p>
                                </article> : null}
 
                                <article className="pb-6 px-2">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="intensity">Nivel de Intensidad</label>
                                        <RequiredStatus hasError={intensity} isSubmitted={isSubmitted}/> 
                                    </div>

                                    <div className="mt-2">
                                        <Controller 
                                            name="intensity"
                                            control={control}
                                            rules={{required: '¿Modo relax o bestia? ¡Indica tu intensidad!'}}
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
                                    <p className="form-activity__message-errors mt-2">{intensity?.message}</p>
                                </article>
                            
                                <article className="pb-6 px-2">
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="sex">Minutos</label>
                                            <RequiredStatus hasError={minuts} isSubmitted={isSubmitted}/>
                                        </div>
                                        <div className="mt-2">
                                            <Input id="minuts" type="number" 
                                                {...register("minuts", {
                                                    required: '¡Necesitamos minutos reales para tu sesión!'
                                                })}
                                                placeholder="Duración en minutos"
                                                min={1}/>
                                        </div>
                                        <p className="form-activity__message-errors mt-2">{minuts?.message}</p>
                                </article>
                                
                                <button type="submit" className="form-activity__update-chart">
                                    Actualizar gráfico
                                </button>
                        </form>
                        <SubmitNotification />
                    </section>
                </CardContent>
            </Card>
        </>
    )
}

