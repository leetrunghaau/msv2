"use client"

import RowSteps from "@/components/uilt/rowSteps";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { cn } from "@heroui/theme";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    const pathname = usePathname();
    const sectionPath = pathname?.split('/')[2];
    const sectionList = ["info", "address", "pass"];
    const sectionActive = sectionList.includes(sectionPath) ? sectionPath : 'home'
    console.log("parth", sectionPath)

    return (
        <div className="flex  items-start justify- mt-5 mb-4 gap-10">
            <div className="flex flex-col items-center gap-2">
                <Avatar
                    className="w-40 h-40 text-large"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <div>
                    <h1 className="text-xl text-secondary font-bold">Lê Trung hậu</h1>
                    <p className="text-medium text-default-700">@leetrunghaau</p>
                </div>
                <Divider />
                <div className="flex flex-col gap-0">
                    <Link href="/user">
                        <div className={cn(
                            "flex items-center gap-2 p-2 w-56",
                            { "border-2 border-secondary rounded-xl": sectionActive === 'home' },
                            { "cursor-pointer transition-all duration-100 hover:border-2 hover:border-default rounded-xl": sectionActive !== 'home' }
                        )}>
                            <Icon icon={"lets-icons:order"} className="text-2xl text-default-700" />
                            <p className="text-default-700">Đơn hàng của tôi</p>
                        </div>
                    </Link>
                    <Link href="/user/info">
                        <div className={cn(
                            "flex items-center gap-2 p-2 w-56",
                            { "border-2 border-secondary rounded-xl": sectionActive === 'info' },
                            { "cursor-pointer transition-all duration-100 hover:border-2 hover:border-default rounded-xl": sectionActive !== 'info' }
                        )}>
                            <Icon icon={"line-md:account"} className="text-2xl text-default-700" />
                            <p className="text-default-700">Thông tin tài khoản</p>
                        </div>
                    </Link>
                    <Link href="/user/address">
                        <div className={cn(
                            "flex items-center gap-2 p-2 w-56",
                            { "border-2 border-secondary rounded-xl": sectionActive === 'address' },
                            { "cursor-pointer transition-all duration-100 hover:border-2 hover:border-default rounded-xl": sectionActive !== 'address' }
                        )}>
                            <Icon icon={"eva:pin-outline"} className="text-2xl text-default-700" />
                            <p className="text-default-700">Địa chỉ nhận hàng</p>
                        </div>
                    </Link>
                    <Link href="/user/pass">
                        <div className={cn(
                            "flex items-center gap-2 p-2 w-56",
                            { "border-2 border-secondary rounded-xl": sectionActive === 'pass' },
                            { "cursor-pointer transition-all duration-100 hover:border-2 hover:border-default rounded-xl": sectionActive !== 'pass' }
                        )}>
                            <Icon icon={"fluent:password-16-regular"} className="text-2xl text-default-700" />
                            <p className="text-default-700">Đổi mật khẩu</p>
                        </div>
                    </Link>
                    <div className="flex w-56 items-center gap-2 p-2 cursor-pointer transition-all duration-100 hover:border-2 hover:border-danger hover:bg-danger-50 rounded-xl ">
                        <Icon icon={"ic:round-logout"} className="text-2xl text-default-700" />
                        <p className="text-default-700">Đăng xuất</p>
                    </div>
                </div>
            </div>
            {children}
        </div>


    );
}
