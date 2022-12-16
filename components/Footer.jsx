import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-veryDarkBlue">
            <div className="conainer flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* Logo and social links container */}
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    {/* Logo */}
                    <div>
                        <Image
                            src="/logo-white.svg"
                            className="h-8"
                            height={300}
                            width={300}
                        ></Image>
                    </div>
                    <div className="apps flex justify-center space-x-3">
                        <Link href="">
                            <Image
                                src="/icon-facebook.svg"
                                height={32}
                                width={50}
                                className="h-8"
                            ></Image>
                        </Link>
                        <Link href="">
                            <Image
                                src="/icon-instagram.svg"
                                height={32}
                                width={50}
                                className="h-8"
                            ></Image>
                        </Link>
                        <Link href="">
                            <Image
                                src="/icon-twitter.svg"
                                height={32}
                                width={50}
                                className="h-8"
                            ></Image>
                        </Link>
                    </div>
                </div>
                {/* List Container */}
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <Link href="/" className="hover:text-brightRed">
                            Home
                        </Link>
                        <Link href="/" className="hover:text-brightRed">
                            Pricing
                        </Link>
                        <Link href="/" className="hover:text-brightRed">
                            Products
                        </Link>
                        <Link href="/" className="hover:text-brightRed">
                            About
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-3 text-white">
                        <Link href="/" className="hover:text-brightRed">
                            Careers
                        </Link>
                        <Link href="/" className="hover:text-brightRed">
                            Community
                        </Link>
                        <Link href="/" className="hover:text-brightRed">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form action="/" className="flex space-x-3">
                        <input
                            type="text"
                            className="flex-1 px-4 rounded-full focus:outline-none"
                            placeholder="Updated in your inbox"
                        />
                        <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                            Go
                        </button>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}
