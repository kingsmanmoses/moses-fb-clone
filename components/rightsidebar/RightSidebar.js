import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import co from '../../public/img/flogo.png';
import me from '../../public/img/me.jpg';
import me2 from '../../public/img/me2.jpg';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className=" hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]:">
      <div className=" flex items-center text-gray-500">
        <p className=" flex text-lg font-semibold flex-grow">Contacts</p>
        <div className=" flex space-x-1 px-2">
          <div className=" rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className=" rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className=" rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts src={me2} name="Okoye Moses" status="online" />
      <Contacts src={me} name="Okoye stella" status="online" />
      <Contacts src={me2} name="Okoye kendo" status="offline" />
      <Contacts src={me} name="Okoye okwyto" status="online" />
    </div>
  );
};

export default RightSidebar;
