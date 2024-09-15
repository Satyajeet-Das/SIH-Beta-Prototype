import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children} : Props) => {
    return (
        <div className="flex w-full flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="mx-4 py-10 flex-1">
                {children}
            </div> 
            <Footer />
        </div>
    )
}

export default Layout;