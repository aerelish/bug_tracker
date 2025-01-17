import Link from "next/link";

const links = [
  { name: 'About', href: ''},
  { name: 'Projects', href: ''},
  { name: 'Contact', href: ''},
];

export default function Home() {
  return (
    <nav className="flex flex-row justify-center border-2 border-red-200">
      <div>AERELISH</div>
      <div>
        {links.map((link) => {
          return (
            <Link
              key = {link.name}
              href = {link.href}
              className=""
            >
            {link.name.toUpperCase()}
            </Link>
          )
        })}
      </div>
    </nav>
  );
}
