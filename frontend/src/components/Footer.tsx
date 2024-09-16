import logo from "./logo.png";
const Footer = () => {
    return (
        <div className="bg-green-950 py-3 px-10">
            {/* Call to Action Section */}
            <section className="py-16 bg-green-950 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Upskill?</h2>
                <p className="text-lg mb-8">Sign up and begin your professional journey to land your dream job!</p>
                <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100">
                    Join Now
                </button>
            </section>
            <div className="max-auto flex justify-between items-center">
                {/* <span className="text-sm md:text-base text-white font-bold tracking-tight"> dhrti</span> */}
                <img src={logo} alt="Dhrti" className="h-8 w-auto " />
                <span className="text-sm md:text-base text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </div>
    );
}

export default Footer;