import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* App Name/Logo */}
                <div className="flex items-center justify-center md:justify-start">
                    <h1 className="text-2xl font-bold">CrowdFund</h1>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col items-center md:items-end space-y-3">
                    <h2 className="text-lg font-semibold">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:scale-110 text-blue-500 transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:scale-110 text-sky-400 transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:scale-110 text-pink-500 transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:scale-110 text-blue-300 transition"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} CrowdFund. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
