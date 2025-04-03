"use client";

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { User } from '@heroui/user';
import React from 'react';

type MUserProps = {
  fullInfo?: boolean;  // fullInfo là optional, nếu không truyền sẽ mặc định là false
};

const MUser: React.FC<MUserProps> = ({ fullInfo = false }) => {  // Mặc định fullInfo là false nếu không được truyền
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            // size: "sm",
            className: "w-6 h-6",
            isBordered: true,
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
          }}
          className="transition-transform"
          name={fullInfo ? "Lê Trung Hậu" : ""}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-bold">Đăng nhập bởi</p>
          <p className="font-bold">@leetrunghaau</p>
        </DropdownItem>
        <DropdownItem href='/user' key="settings">Đơn hàn của tôi</DropdownItem>
        <DropdownItem href='/user/info' key="team_settings">Thông tin tài khoản</DropdownItem>
        {/* <DropdownItem key="system">Thông báo</DropdownItem> */}
        <DropdownItem key="logout" color="danger">
          Đăng xuất
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

MUser.displayName = 'MUser';
export default MUser;
