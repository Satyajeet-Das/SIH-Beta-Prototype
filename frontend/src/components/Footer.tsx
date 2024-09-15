const Footer = () => {
    return (
        <div className="bg-green-800 py-3 px-10">
            <div className="max-auto flex justify-between items-center">
                <span className="text-sm md:text-base text-white font-bold tracking-tight"> Job Website Name</span>
                <span className="text-sm md:text-base text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </div>
    );
}

export default Footer;