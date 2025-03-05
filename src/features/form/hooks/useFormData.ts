import {useForm, Controller} from "react-hook-form";
import { FormData } from "@/features/form/types/Activity.ts";

export const useFormData = () => 
{
    const {register, handleSubmit, formState: {errors}, control} = useForm<FormData>();

    return {
        register,
        handleSubmit, 
        Controller,
        control,
        errors,
    }
}