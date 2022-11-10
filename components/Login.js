import { signIn } from 'next-auth/react';
import Image from 'next/image';
import faceimg from '../public/img/face.png';

const Login = () => {
  return (
    <div className=" flex flex-col items-center mx-auto pt-16">
      <Image src={faceimg} height={240} width={240} alt="" />
      <a
        onClick={signIn}
        className=" px-20 py-4 z-10 text-2xl cursor-pointer bg-blue-500 rounded-md text-white"
        href=""
      >
        Login
      </a>
    </div>
  );
};

export default Login;
