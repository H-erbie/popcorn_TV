import Image from "next/image";
import React from "react";
import * as Avatar from '@radix-ui/react-avatar';

const ProfileImg = async ({imgUrl}) => {
  
  return <div className="imp mx-auto overflow-hidden">
    <Avatar.Root>
      <Avatar.AvatarImage src={imgUrl} alt='movie poster' className="w-full h-auto"/>
      <Avatar.AvatarFallback>
        UN
      </Avatar.AvatarFallback>
    </Avatar.Root>
  </div>;
};

export default ProfileImg;
