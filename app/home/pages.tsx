import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="relative min-h-screen flex-col p-6 md:flex-row">
      <div className="h-30 rounded-lg bg-blue-500 p-4 md:h-44 md:w-auto">
        <div className="flex justify-center text-white">
          <p className="text-2xl md:text-center md:text-4xl">
            SIWEB ITU MUDAH DAN ASIK
          </p>
        </div>
        <div className="relative mt-10 flex justify-center">
          <AcmeLogo />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="rounded-lg bg-emerald-300 p-4 md:h-auto md:w-3/5">
          <p>Nama&emsp;: Chandra Wijaya Kusuma</p>
          <p>NPM&emsp;: ********</p>
          <p>Kelas&emsp;: *</p>
          <br />
          <p>Harapan untuk Matkul Siweb</p>
          <p>Semoga (....)</p>
        </div>
      </div>
    </main>
  );
}