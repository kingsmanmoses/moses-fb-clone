import Image from 'next/image';
import { ImUsers } from 'react-icons/im';
import { MdGroups, MdOutlineOndemandVideo, MdExpandMore } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import SiderbarItems from './SiderbarItems';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className=" hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className=" flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl  cursor-pointer">
        <Image
          src={session?.user.image}
          alt=""
          height={40}
          width={40}
          className=" rounded-full cursor-pointer"
        />
        <p className=" hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>
      <SiderbarItems Icon={ImUsers} value="Friends" />
      <SiderbarItems Icon={MdGroups} value="Groups" />
      <SiderbarItems Icon={AiOutlineShop} value="Marketplace" />
      <SiderbarItems Icon={MdOutlineOndemandVideo} value="Watch" />
      <SiderbarItems Icon={BsStopwatch} value="Memories" />
      <SiderbarItems Icon={MdExpandMore} value="See More" />
    </div>
  );
};

export default Sidebar;
