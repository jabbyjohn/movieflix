import { FaFacebook } from "react-icons/fa";
export function Footer(){

    const year = new Date().getFullYear();
     return(
     <footer className="bg-black px-5 py-5 block insert-shadow-sm md:flex md:justify-between ">
        <ul className="text-white text-2xl">
            <li>Movieflix</li>
            <li>&copy; {year} all right reserved</li>
        </ul>
        <div>
        <ul className="flex text-white gap-5 mb-2">
            <li className="text-white">Privacy</li>
            <li>Terms of Service</li>
            <li>Support</li>
        </ul>
        <ul className="flex gap-13">
            <FaFacebook className="text-white text-xl" />
             <FaFacebook className="text-white text-xl" />
              <FaFacebook className="text-white text-xl" />
               <FaFacebook className="text-white text-xl" />
        </ul>
        </div>
     </footer>
   )
}