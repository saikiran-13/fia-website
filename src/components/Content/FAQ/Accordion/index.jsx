import React, { useState } from 'react';
const Accordion = ({ faqs }) => {
    return (
        <div className="w-[600px] border-1 rounded-lg shadow-md shadow-color3 border-color4">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} faq={faq} index={index} />
            ))}
        </div>
    );
};

const AccordionItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`w-full border border-b-color3 `}>
            <h2 id={`accordion-color-heading-${index}`}>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium text-color4 border-b-0  hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${isOpen ? 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-color-body-${index}`}
                >
                    <span>{faq.question}</span>
                    <svg
                        className={`w-3 h-3 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5L5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-color-body-${index}`}
                className={`${isOpen ? 'block' : 'hidden'} border-t-0`}
                aria-labelledby={`accordion-color-heading-${index}`}
            >
                <div className="p-5">
                    <p className="mb-2 text-color3">{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
