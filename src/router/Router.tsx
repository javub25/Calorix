
import { Suspense, lazy } from "react";
import {BrowserRouter, Routes, Route } from "react-router"
import { Header } from "@/layouts/Header";
import { Spinner } from "@/router/components/Spinner";

export const Router = () => 
{
    const Form = lazy(() => import("@/features/form/components/ActivityForm"));
    const Pie = lazy(() => import("@/features/chart/components/ActivityPie"));

    return (
        <BrowserRouter>
            <Header />
                <Suspense fallback={<Spinner/>}>
                    <section className="px-5 pb-[20rem]">
                        <Routes>
                            <Route path="/" element={<Form />} />
                            <Route path="/tus-actividades" element={<Pie />} />
                            <Route path="*" element={<Form />} />
                        </Routes>
                    </section>
                </Suspense>
        </BrowserRouter>
    )
}