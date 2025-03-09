import { toast } from "sonner"

export const getSubmitFeedback = () => 
{
    const SuccessMessage = () => toast.success("¡Boom! Datos registrados. ¡A por esa meta fitness!");
    const ErrorMessage = () => toast.error("¡Houston, tenemos un problema! Revisa los campos e intenta de nuevo");
    
    return {SuccessMessage, ErrorMessage}
}