
import {useState} from 'react';
import { HiLibrary, HiMenuAlt4, HiOutlineTrendingUp } from 'react-icons/hi';
import { AiOutlineClose, AiTwotonePicture } from 'react-icons/ai';

import logo from '../../images/logo.png';


const NavbarItem = ({title, classprops}) =>{
    return (
        <li className = {`mx-4 cursor-pointer ${classprops}`}> 
            {title} 
         </li> 
         
         );
} 


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        
        <nav className = "w-full flex md:justify-center justify-between items-center p-4">
            <div className = "md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className = "w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
              {["About us", "Exchange", "Market", "How to install Metamask"].map((item, index) => (
               <NavbarItem key={item + index} title={item} />

              ))} {/*hoon lazim arj3 wazabet el wade3 3ala 7asab shu ana b7taj lal mwke33    */}

                <li className= "cursor-pointer ext-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    Login 
                </li>

            </ul>
            <div className = "flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className = "text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                : <HiMenuAlt4 fontSize={28} className = "text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/> }

                { toggleMenu && (

                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                        <li className="text-xl w-full my-2">
                        <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>

                        {["About us", "Exchange", "Market", "How to install Metamask"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />

                        ))}
                        
                    </ul>
                    )}
                

            </div>

        </nav>
    );
}

export default Navbar; 