import { DesktopMenu } from "@/layouts/navigation/DesktopMenu";
import { MobileMenu } from "@/layouts/navigation/MobileMenu";

export const Header = () => 
{
    return (
        <header className="site-header__menu p-6 mb-12">
            <nav>
                <DesktopMenu />
                <MobileMenu/>
            </nav>
        </header>
    )
}