import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { HiOutlinePencilSquare, HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log("Session", session);
  
  return (
    <div className="flex justify-between p-3 border-b-[2px] border-[#FF3366]">
      <img
        src="./Images/logo.png"
        width={170}
        alt="easy active logo"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/create-post")}
          className="bg-black p-1 px-3 text-white rounded-full text-[12px]"
        >
          <span className="hidden sm:block">CREATE POST</span>
          <HiOutlinePencilSquare className="sm:hidden text-[17px]" />
        </button>
        {!session ? (
          <button
            onClick={() => signIn()}
            className="bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full"
          >
            <span className="hidden sm:block">SIGN IN</span>
            <HiArrowLeftOnRectangle className="sm:hidden text-[17px]" />
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full"
          >
            <span className="hidden sm:block">SIGN OUT</span>
            <HiArrowLeftOnRectangle className="sm:hidden text-[17px]" />
          </button>
        )}
        {session ? (
          <Image
            src={session ? session?.user?.image : "/Images/DefaultUser.jpg"}
            alt="user image"
            className="rounded-full cursor-pointer"
            onClick={() => router.push("/profile")}
            width={40}
            height={40}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Header;
