import Image from 'next/image';
import face from '../../public/img/flogo.png';
import po from '../../public/img/pos.jpg';
import { FiThumbsUp } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const Post = () => {
  return (
    <div className=" flex flex-col">
      <div className=" bg-white mt-6 rounded-md p-4">
        <div className=" flex items-center space-x-2">
          <Image src={face} className=" rounded-full w-10 h-10 " alt="" />
          <div>
            <p className=" font-medium">Okoye Moses</p>
            <p className=" text-xs to-gray-500">{new Date().getTime()}</p>
          </div>
        </div>
        <p className=" py-4">lorem Mooo</p>
      </div>
      {/* If any image */}
      <div className=" relative h-60 md:h-96 bg-white">
        <Image src={po} alt="" layout="fill" objectFit="cover" />
      </div>
      {/* footer post */}
      <div className=" flex items-center justify-center bg-white p-2">
        <div className=" flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className=" h-4" />
          <p className=" text-xs sm:text-base">Like</p>
        </div>
        <div className=" flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className=" h-4" />
          <p className=" text-xs sm:text-base">Comment</p>
        </div>
        <div className=" flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className=" h-4" />
          <p className=" text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
