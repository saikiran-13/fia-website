import React, { useState } from 'react';
import parse from 'html-react-parser'
const Accordion = ({ faqs }) => {
    return (
        <div className="w-full lg:w-[600px] border-1 rounded-lg shadow-md shadow-color3 border-color4">
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
                    className={`flex items-center justify-between w-full p-5 font-medium text-color4 border-b-0  hover:bg-color2  gap-3 ${isOpen ? 'bg-color2  text-color4 ' : ''}`}
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
                    <p className="mb-2 text-color3">{parse(faq.answer)}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
