/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from '../../public/src/features/postSlice';

const PostBox = () => {
  const FACEBOOK_CLONE_ENDPOINT = '';
  const { data: session } = useSession();
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  // To add an image you want to post
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const [imagePost, setImagePost] = useState(null);
  const addImagePost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImagePost(e.target.result);
      };
    }
  };
  // To remove the img you wanted to post
  const removeImage = () => {
    setImagePost(null);
  };

  // Handle s
  const handleSubmit = (e) => {
    // To prevent Refresh
    e.preventDefault();
    // When nothing is there to post it should submit
    if (!inputRef.current.value) return;
    const formData = new FormData();

    formData.append('file', imagePost);
    formData.append('post', inputRef.current.value);
    formData.append('user', session.user.name);
    formData.append('email', session.user.email);
    formData.append('profilePic', session.user.image);

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: 'application/json' },
      })
      .then((response) => {
        inputRef.current.value = '';
        dispatch(addPost(response.data));
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className=" flex p-4 space-x-2 items-center">
        <Image
          className=" rounded-full cursor-pointer"
          src={session?.user.image}
          alt=""
          height={40}
          width={40}
        />
        <form action="" className=" flex flex-1">
          <input
            ref={inputRef}
            className=" rounded-full h-12 flex-grow focus:outline-none font-medium px-4 bg-gray-100"
            type="text"
            placeholder={`what's on your mind, ${session?.user.name}?`}
          />
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>
      {imagePost && (
        <div
          onClick={removeImage}
          className=" flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <img src={imagePost} alt="" className=" h-10 object-contain" />
          <RiDeleteBin6Line className=" h-8 hover:text-red-500" />
        </div>
      )}
      <div className=" flex justify-evenly py-2">
        <div className=" flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className=" text-red-500" />
          <p className=" font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className=" flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
        >
          <IoMdPhotos size={20} className=" text-green-500" />
          <p className=" font-semibold text-gray-600">Photo/Video</p>
          <input
            onChange={addImagePost}
            type="file"
            ref={hiddenFileInput}
            hidden
            accept="image/*"
          />
        </div>
        <div className=" flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className=" text-yellow-500" />
          <p className=" font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
