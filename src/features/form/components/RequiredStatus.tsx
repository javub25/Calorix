import { RequiredProps } from "@/features/form/types/Activity.ts"

export const RequiredStatus = ({hasError, isSubmitted}: RequiredProps) => 
{
    if (isSubmitted && hasError) {
        return (
          <div className="flex items-center animate-bounce">
            <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741337608/required_awyinu.svg" alt="Required icon" className="mr-[0.3rem] w-4 h-4"/>
            <span className="text-xs">Requerido</span>
          </div>
        )
    }
    return (
        <div className="flex items-center">
          <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1741347893/required-dot_eya6vw.svg" alt="Required dot icon" className="mr-[0.3rem] w-2 h-2"/>
          <span className="text-xs">Requerido</span>
        </div>
      )
}