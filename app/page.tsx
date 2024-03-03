


import { kanit, anton } from '@/app/ui/fonts';

import Image from 'next/image';


import Link from 'next/link';
import { UserIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';


export default function Page() {
    return (
        <main className="relative min-h-screen flex-col p-6 ">
            <Image
                src="/home/bg_hero.png"
                layout="fill"
                objectFit="cover"
                className="absolute z-0"
                alt="Screenshots of the dashboard project showing desktop version"
            />
            <nav
                className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-transparent"
            >
                <div className="flex justify-between p-4">
                    <div className={`${kanit.className}  flex  antialiased text-[2rem] leading-[3rem] font-bold text-black dark:text-white`}>
                        <Image
                            src="/home/logo_hero.png"
                            width={35}
                            height={35}
                            className='mx-4'
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                        Atma Barbershop
                    </div>
                    <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
                        <button
                            className="px-6 py-2  text-black hidden md:block bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black"
                        >Login</button>
                        <UserIcon className='w-[35px] h-[35px] text-white md:hidden'></UserIcon>

                    </div>
                </div>
            </nav>

            <div className='my-[200px] mx-[5%] absolute z-1'>
                <h1 className={`${kanit.className} antialiased text-white text-[20px]`}> NPM Lengkap - Nama Lengkap</h1>
                <h1 className={`${anton.className} antialiased text-white text-[60px]`}> Our Barbershop </h1>
                <h1 className={`${anton.className} antialiased text-white text-[60px]`}> Admin Dashboard</h1>
                <Link
                    href='/dashboard'
                >
                    <h1 className={`${kanit.className} antialiased flex text-white text-[20px] hover:text-teal-500`}> Go to Dashboard
                        <ArrowRightCircleIcon className='w-6 mx-2'/>
                    </h1>
                </Link>
            </div>
        </main>
    );
}