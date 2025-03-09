import {useForm, Controller, FieldError} from "react-hook-form";
import { FormData } from "@/features/form/types/Activity.ts";

export type {FieldError}

export const useFormData = () => 
{
    const {register, handleSubmit, control, formState: {errors, isSubmitted}} = useForm<FormData>();

    return {
        register,
        handleSubmit, 
        Controller,
        control,
        errors,
        isSubmitted
    }
}