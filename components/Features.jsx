import React from "react";
import FeaturesItem from "./FeaturesItem";

export default function Features() {
    return (
        <section id="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                {/* What's Different */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>

                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2 ">
                    <FeaturesItem
                        number="01"
                        title="Track company-wide progress"
                        description="See how your day-to-day tasks fit into the wider
                                vision. Go from tracking progress at the
                                milestone level all the way down to the smallest
                                of details. Never lose sight of the bigger
                                picture again."
                    ></FeaturesItem>
                    <FeaturesItem
                        number="02"
                        title="Advanced built-in reports"
                        description="Set internal delivery estimates and track progress toward company goals. 
                    Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
                    ></FeaturesItem>
                    <FeaturesItem
                        number="03"
                        title="Everything you need in one place"
                        description="Stop jumping from one service to another to communicate, store files, 
                    track tasks and share documents. Manage offers an all-in-one team productivity solution."
                    ></FeaturesItem>
                </div>
            </div>
        </section>
    );
}
