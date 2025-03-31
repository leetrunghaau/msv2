"use client";

import { ScrollShadow } from "@heroui/scroll-shadow";
import React from "react";
import { ProductItem } from '@/components/product/productItem';
import ProductListItem from '@/components/product/productItem';
import { cn } from "@heroui/theme";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";
import ContentItem from "./contentItem";
type ContentListProps = {
    title: string;
    data: String[];
};

const ContentList: React.FC<ContentListProps> = ({ title, data }) => {

    return (
        <div className={cn(" flex flex-col w-full justify-start align-center pt-10")}>
            <div className={cn("flex items-center justify-between px-6 py-4")}>
                <h2 className={cn("text-2xl font-semibold text-default-800")}>{title ?? "Danh sách"}</h2>
                <Link
                    isExternal
                    showAnchorIcon
                    anchorIcon={<Icon icon="solar:double-alt-arrow-right-line-duotone" width={20} />}
                    href="#"
                >
                    Tất cả
                </Link>
            </div>
            <ScrollShadow
                className="flex w-full max-w-full justify-start gap-6 py-3 px-4"
                orientation="horizontal"
                size={20}
            >
                {data.map((product) => (
                    <ContentItem  title="abc" data={true} />
                ))}
            </ScrollShadow>
        </div>
    );
};
ContentList.displayName = "ContentList";
export default ContentList;
