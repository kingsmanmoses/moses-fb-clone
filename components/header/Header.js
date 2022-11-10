import Image from 'next/image';
import {
  HiFlag,
  HiHome,
  HiOutlineSearch,
  HiShoppingCart,
  HiVideoCamera,
} from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { CgMenuGridO } from 'react-icons/cg';
import { AiFillMessage, AiFillBell } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import facelogo from '../../public/img/flogo.png';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className=" bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* left header */}
      <div className=" flex min-w-fit">
        <Image src={facelogo} alt="" height={40} width={40} />
        <div className=" flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className=" hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center header */}
      <div className=" flex flex-grow justify-center mx-2">
        <div className=" flex items-center">
          <div className=" flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiHome className=" mx-auto " size={25} />
          </div>
          <div className=" flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiFlag className=" mx-auto " size={25} />
          </div>
          <div className=" flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiVideoCamera className=" mx-auto " size={25} />
          </div>
          <div className=" flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiShoppingCart className=" mx-auto " size={25} />
          </div>
          <div className=" flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoLogoGameControllerB className=" mx-auto " size={25} />
          </div>
        </div>
      </div>
      {/* right header */}
      <div className=" flex items-center justify-end min-w-fit space-x-2">
        <Image
          onClick={signOut}
          className=" rounded-full cursor-pointer"
          src={session?.user.image}
          alt=""
          height={40}
          width={40}
        />
        <p className=" hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-2 max-w-xs">
          {session.user.name}
        </p>
        <CgMenuGridO
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full cursor-pointer p-2 hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full cursor-pointer p-2 hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full cursor-pointer p-2 hover:bg-gray-300"
        />
        <MdExpandMore
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full cursor-pointer p-2 hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
