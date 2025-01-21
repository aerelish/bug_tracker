'use client';


import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

import {
    HomeIcon,
    CodeBracketIcon,
    BugAntIcon,
    FolderIcon
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/bugtracker', icon: HomeIcon },
  { name: 'Dashboard', href: '/bugtracker/dashboard', icon: CodeBracketIcon },
  { name: 'Bugs', href: '/bugtracker/bugs', icon: BugAntIcon },
  { name: 'Projects', href: '/bugtracker/projects', icon: FolderIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center gap-4 text-sm text-white font-medium tracking-wider hover:bg-gray-500 flex-none justify-start p-2 px-3',
              {
                'bg-gray-600 font-semibold text-base': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 ml-4" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
