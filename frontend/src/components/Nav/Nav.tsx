import { useState } from "react";
import { NavLink } from "react-router";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 right-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
            <div className="flex justify-end items-center px-4 md:px-8 py-3 md:py-4">
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div
                        className={`w-6 h-0.5 bg-green-moss transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <div
                        className={`w-6 h-0.5 bg-green-moss transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                    />
                    <div
                        className={`w-6 h-0.5 bg-green-moss transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>

                <div className="hidden md:flex gap-6 items-center justify-end">
                    <NavHashLink
                        smooth
                        to="/#header"
                        className="text-base hover:opacity-70 transition-opacity text-green-moss"
                    >
                        Home
                    </NavHashLink>

                    <NavHashLink
                        smooth
                        to="/#celebration-timeline"
                        className="text-base hover:opacity-70 transition-opacity text-green-moss"
                    >
                        Celebration Timeline
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to="/#accommodation-getting-there"
                        className="text-base hover:opacity-70 transition-opacity text-green-moss"
                    >
                        Getting There & Accommodation
                    </NavHashLink>
                    <NavLink
                        to="/rsvp"
                        className="text-base hover:opacity-70 transition-opacity text-green-moss"
                    >
                        RSVP
                    </NavLink>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden fixed top-10 right-0 bg-white/95 backdrop-blur-sm shadow-md w-full flex flex-col gap-0 px-4 py-4 animate-in fade-in slide-in-from-top-2">
                    <NavHashLink
                        to="/#header"
                        smooth
                        onClick={closeMenu}
                        className="text-sm hover:opacity-70 transition-opacity text-green-moss py-2"
                    >
                        Home
                    </NavHashLink>

                    <NavHashLink
                        smooth
                        to="/#celebration-timeline"
                        onClick={closeMenu}
                        className="text-sm hover:opacity-70 transition-opacity text-green-moss py-2"
                    >
                        Celebration Timeline
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to="/#accommodation-getting-there"
                        onClick={closeMenu}
                        className="text-sm hover:opacity-70 transition-opacity text-green-moss py-2"
                    >
                        Getting There & Accommodation
                    </NavHashLink>
                    <NavLink
                        to="/rsvp"
                        onClick={closeMenu}
                        className="text-sm hover:opacity-70 transition-opacity text-green-moss py-2"
                    >
                        RSVP
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Nav;
