import React from 'react'

const Card = ({ name, role, image }) => {
    return (
        <div class="min-w-fit text-center mr-10 mb-10">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={image} alt="Joseph Avatar" />
            <h3 class="mb-1 text-xl font-bold tracking-tight text-color5">
                <a href="#">{name}</a>
            </h3>
            <p className='text-color3 text-md'>{role}</p>
            <ul class="flex justify-center mt-4 space-x-4">
                <li>
                    <a href="#" class="text-[#0a0a0b] hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Card