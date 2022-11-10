import React from 'react';
import Post from './Post';
import PostBox from './CreatePostBox';

const Feed = () => {
  return (
    <div className=" flex-grow h-screen pt-6 mr-6 overflow-y-auto ">
      <div className=" mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Create post box */}
        <PostBox />
        {/* Post pages */}
        <Post />
      </div>
    </div>
  );
};

export default Feed;
