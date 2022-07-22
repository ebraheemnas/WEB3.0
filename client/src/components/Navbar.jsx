
import {useState , useContext} from 'react';
import { HiLibrary, HiMenuAlt4, HiOutlineTrendingUp } from 'react-icons/hi';
import { AiOutlineClose, AiTwotonePicture } from 'react-icons/ai';
import React from 'react';
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
        
        <nav className = "w-full flex md:justify-center justify-between items-center p-4 nav ">
            <div className = "md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className = "w-32 cursor-pointer" /> 
            </div>


            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">

              {[ 

                    <a href="https://express.adobe.com/page/caHsboaCnaNAI/"> About us</a>,
                    "Exchange",
                    "Market",
                    <a href="https://metamask.io/"> Intsall Metamask</a>

                ].map((item, index) => (
                <NavbarItem key={item + index} title={item} />
                ))}

               



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

                        {[

                        <a href="https://express.adobe.com/page/caHsboaCnaNAI/"> About us</a>,
                         "Exchange",
                          "Market",
                        <a href="https://metamask.io/"> Intsall Metamask</a>].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />


                        ))}
                        
                    </ul>
                    )}
                

            </div>

        </nav>
    );
                        
}

export default Navbar; 