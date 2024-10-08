import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex w-full flex-col min-h-screen">
            {/* <Header /> */}
            <Hero />
            <div className="mx-4 py-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;

const Layout1 = ({ children }: Props) => {
    return (
        <div className="flex w-full flex-col min-h-screen">
            <Header />
            <div className="mx-4 py-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
}
export { Layout1 };
