import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
