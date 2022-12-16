import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative container mx-auto p-6">
            {/* Flex Container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="div pt-2">
                    <Image src="/logo.svg" width={160} height={20} alt="" />
                </div>
                {/* Menu Items */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="" className="hover:text-darkGrayishBlue">
                        Pricing
                    </Link>
                    <Link href="" className="hover:text-darkGrayishBlue">
                        Product
                    </Link>
                    <Link href="" className="hover:text-darkGrayishBlue">
                        About Us
                    </Link>
                    <Link href="" className="hover:text-darkGrayishBlue">
                        Careers
                    </Link>
                    <Link href="" className="hover:text-darkGrayishBlue">
                        Community
                    </Link>
                    {/* Button */}
                </div>
                <Link
                    href=""
                    className="hidden md:block hover:bg-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline"
                >
                    Contact Us
                </Link>

                {/* Hamburder Icon */}
                <button
                    onClick={() => setOpen(!open)}
                    id="menu-btn"
                    className={
                        open
                            ? "open block hamburger md:hidden focus:outline-none"
                            : "block hamburger md:hidden focus:outline-none"
                    }
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
                <div
                    id="menu"
                    className="absolute flex flex-col hidden items-center self-end py-8 mt-10 
                space-y-6 font-bold bg-white sm:w-auto 
                sm:self-center left-6 right-6 drop-shadow-md"
                >
                    <Link href="/">Pricing</Link>
                    <Link href="/">Product</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Careers</Link>
                    <Link href="/">Community</Link>
                </div>
            </div>
        </nav>
    );
}
