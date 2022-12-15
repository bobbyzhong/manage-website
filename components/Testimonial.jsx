import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Testimonial() {
    return (
        <section id="testimonials">
            {/* Container to heading and testm blocks */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    What's Different About Manage?
                </h2>
                {/* Testimonials container */}
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 ">
                        <Image
                            src="/avatar-anisha.png"
                            width={100}
                            height={100}
                            className="w-16 -mt-14"
                        ></Image>
                        <h5 className="text-lg font-bold">Anisha Li</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The
                            ability to maintain visibility on larger milestones
                            at all times keeps everyone motivated.”
                        </p>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3 ">
                        <Image
                            src="/avatar-ali.png"
                            width={100}
                            height={100}
                            className="w-16 -mt-14"
                        ></Image>
                        <h5 className="text-lg font-bold">Ali Bravo</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “We have been able to cancel so many other
                            subscriptions since using Manage. There is no more
                            cross-channel confusion and everyone is much more
                            focused.”
                        </p>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3 ">
                        <Image
                            src="/avatar-richard.png"
                            width={100}
                            height={100}
                            className="w-16 -mt-14"
                        ></Image>
                        <h5 className="text-lg font-bold">Richard Watts</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The
                            ability to maintain visibility on larger milestones
                            at all times keeps everyone motivated.”
                        </p>
                    </div>
                </div>
                {/* Button */}
                <div className="my-16">
                    <Link
                        href=""
                        className="hover:bg-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
}
