import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-auto px-3 py-4 md:px-2">
      <Link
        className="h-15 md:h-15 flex w-56 justify-center rounded-md bg-blue-600 p-4"
        href="/"
      >
        <div className="relative flex w-32 justify-center text-white md:w-auto">
          <AcmeLogo />
        </div>
      </Link>
      <div className="ml-5 flex items-center space-x-4 md:ml-5">
        <NavLinks />
{/*         <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
  );
}
