import Link from "next/link";
import Image from 'next/image';
import { font_ubuntu } from '@/app/fonts';

const links = [
  { name: 'About', href: ''},
  { name: 'Projects', href: ''},
  { name: 'Contact', href: ''},
];

export default function Home() {
  return (
    <div>    
      <nav className="flex fixed z-10 flex-row w-full top-10 justify-between items-center px-16 py-4 text-black bg-transparent tracking-widest">
        <div><a className="text-xl font-medium" href="#">AERELISH</a></div>
        <div className="flex flex-row ">
          {links.map((link) => {
            return (
              <Link
                key = {link.name}
                href = {link.href}
                className="pl-10"
              >
              {link.name.toUpperCase()}
              </Link>
            )
          })}
        </div>
      </nav>
      <div className="flex h-screen w-full justify-center items-center m-auto">
        
        <div className="flex flex-col p-0">
          <div className="flex justify-end pr-5">
            <h1 className="text-2xl tracking-widest">SOFTWARE DEVELOPER</h1>
          </div>
          <div className="-mb-5 -mt-3">
            <h1 className={`${font_ubuntu.className} text-9xl font-bold tracking-widest`}>AERELISH</h1>
          </div>
          <div className="flex flex-row pt-3 tracking-widest">
            <h2 className="text-2xl pb-3 pt-1">ELISHA JOHN RAGAS</h2>
            <h2 className="text-5xl font-thin">|</h2>
            <div className="flex flex-row pt-1">
              <Image
                src="/svg/github.svg"
                alt="github icon"
                width={50}
                height={50}
              />
              <Image
                className="ml-1"
                src="/svg/linkedin_sq.svg"
                alt="linkedin icon"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>

        <Image
          className="-z-10"
          src="/images/hero_desktop.png"
          alt="a minimalist white background"
          fill={true}
        />
        {/* Commenting this out for now, will be adding for Mobile Later
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        */}

      </div>
    </div>
  );
}
