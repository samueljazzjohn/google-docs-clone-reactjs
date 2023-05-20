import React from "react";

const ProfileBar = () => {
  return (
    <>
      <div className="flex flex-row space-x-5 mt-2">
        <span class="material-symbols-outlined">history</span>
        <span class="material-symbols-outlined">videocam</span>

        <div className="flex flex-row space-x-1">
          <span class="material-symbols-outlined">chat</span>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
        <div className="flex flex-row bg-blue-200 rounded-3xl px-5 py-2 -translate-y-2 space-x-2">
          <span class="material-symbols-outlined text-xl">lock</span>
          <p className="text-[14px] font-semibold translate-y-1">Share</p>
        </div>
        <img
          className="shadow-md rounded-full h-10 w-10 -translate-y-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEonb3HZARU1rTROedCGyhseQLaM4qzbVFsI539A4VXpFyd9Xg7WvXwb6wZJuHVOu-i-0&usqp=CAU"
          alt=""
        />
      </div>
    </>
  );
};

export default ProfileBar;
