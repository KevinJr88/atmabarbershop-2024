'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: UserGroupIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>

      {/* <Link
        href='/dashboard'
        className={
          ` ${pathname === '/dashboard' ? 'bg-sky-100 text-blue-600' : ''} 
          flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`

        }
      >
        <HomeIcon className="w-6"></HomeIcon>
        <p className="hidden md:block">Home</p>
      </Link>

      <Link
        href='/dashboard/invoices'
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'bg-sky-100 text-blue-600': pathname === '/dashboard/invoices',
          },
        )}
      >
        <DocumentDuplicateIcon className="w-6"></DocumentDuplicateIcon>
        <p className="hidden md:block">Invoices</p>
      </Link>


      <Link
        href='/dashboard/customers'
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'bg-sky-100 text-blue-600': pathname === '/dashboard/customers',
          },
        )}
      >
        <UserGroupIcon className="w-6"></UserGroupIcon>
        <p className="hidden md:block">Customers</p>
      </Link> */}

      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-100 hover:text-amber-950 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-amber-100 text-amber-950': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
