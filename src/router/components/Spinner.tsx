import '@/router/styles/spinner.css'
import calories from '@/assets/svg/calories.svg'

export const Spinner = () => {
    return (
        <header className="text-center mt-20 animate-pulse pb-[20rem]">
            <img src={calories} alt="Flame icon" className="w-20 h-20 mx-auto mb-8"/>
            <span className="loader"></span>
        </header>
    )
}