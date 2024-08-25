import React, { useState } from "react";

export function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="w-fit shadow-color3 shadow-sm rounded-lg p-3">
                <nav className="flex items-center justify-center space-x-2 rounded-full ">
                    {tabs.map(({ label, value }, index) => (
                        <button
                            key={value}
                            onClick={() => setActiveTab(value)}
                            className={`w-fit px-3 py-2 font-medium text-sm rounded-full transition-colors duration-300 ease-in-out
                                ${activeTab === value
                                    ? "bg-color6 text-color1"
                                    : `bg-color1 text-color6 `
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="mt-4">
                {tabs.map(
                    ({ value, Cmp }) =>
                        activeTab === value && (
                            <div key={value} className="text-gray-700 text-sm">
                                {Cmp}
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
