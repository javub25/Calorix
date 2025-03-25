import '@/router/styles/spinner.css'

export const Spinner = () => {
    return (
        <header className="text-center mt-20 animate-pulse">
            <span className="loader"></span>
            <h1 className="text-2xl font-bold text-[#144054] my-4">Cargando...</h1>            
        </header>
    )
}