import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-gradient-to-r from-black to-amber-950 p-3 md:h-36">
         <div className="flex items-center w-36 text-white md:w-48">
           <span className="text-4xl font-bold">Atma Barbershop</span>
            <div className="flex items-center ml-auto">
          <Image
              src="/home/logo_hero.png"
              width={100}
              height={100}
              className='mx-20 w-[75px] h-[75px]'
              alt="Screenshots of the dashboard project showing desktop version"
          />
          </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}