import Image from "next/image";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNavBar";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 scroll-px-52">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]} />
        <Hero />
      </div>
    </main>
  );
}
