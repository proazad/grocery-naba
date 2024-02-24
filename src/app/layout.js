import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Grocery Naba",
  description: "This is a Local Grocery Shop",
};

export default function RootLayout({ children }) {
  const navLink = <>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/about"}>About</Link></li>
    <li><Link href={"/contact"}>Contact</Link></li>
    <li><Link href={"/chips"}>chips</Link></li>
    <li><Link href={"/juice"}>juice</Link></li>
    <li><Link href={"/marai"}>marai</Link></li>
  </>
  return (
    <html lang="en">
      <body>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 select-none cursor-pointer text-xl font-bold"><Link href={"/"}>Grocery Naba</Link></div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {navLink}
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              {navLink}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
