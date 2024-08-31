import React from 'react';

const JoinUs = ({ isOpen, onClose, onAccept }) => {
    if (!isOpen) return null;

    return (
        <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-2xl bg-color1 rounded-lg shadow">
                <div className="flex items-center justify-between p-4 border-b rounded-t border-color3">
                    <h3 className="text-xl font-semibold text-color6">
                        Terms of Service
                    </h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-color6 hover:bg-color2 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
                <div className="p-4 space-y-4">
                    <p className="text-base text-color3">
                        By accessing and using the Friends of India Association (FIA) website at Clarkson University, you agree to adhere to our Terms and Services, ensuring a safe and supportive online space. All content on our site is the intellectual property of FIA and Clarkson Unviersity, and any unauthorized use is prohibited. Users must conduct themselves responsibly, and we reserve the right to remove any content that violates our guidelines.
                    </p>
                    <p className="text-base text-color3">
                        FIA is dedicated to protecting your privacy as outlined in our Privacy Policy. While we strive for accuracy, the website and its content are provided "as is" without warranties. FIA is not liable for any damages resulting from the use of our website.                    </p>
                </div>
                <div className="flex items-center p-4 border-t border-color3 rounded-b">
                    <button
                        onClick={onAccept}
                        type="button"
                        className="text-color1 bg-color6 hover:bg-color6 rounded-lg text-sm px-5 py-2.5"
                    >
                        I accept
                    </button>
                    <button
                        onClick={onClose}
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-color6 bg-color1 rounded-lg border border-color6 hover:bg-color1 hover:text-color6"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
