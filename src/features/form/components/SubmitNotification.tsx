import { Toaster } from "@/features/form/utils/shadcn/index.ts"

export const SubmitNotification = () => 
{
    const ErrorIcon = () => <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741353460/error-svgrepo-com_dowcii.svg" alt="Error icon"/>
    const SuccessIcon = () => <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741353890/success-filled-svgrepo-com_2_tuxumf.svg" alt="Success icon" />
    
    return (
        <Toaster 
            icons={{
                error: <ErrorIcon />,
                success: <SuccessIcon />              
            }}
        />
    )
}