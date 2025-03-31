"use client";

import CategoryCard from "@/components/card/category";
import ContentList from "@/components/content/contentList";


const data = [
    {
        id: 1,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 2,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 3,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 4,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 5,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 6,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 7,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 8,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 9,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 10,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 11,
        name: "linh kiện loại a https://cdn-media.sfor",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    },
    {
        id: 12,
        name: "linh kiện loại a",
        imgSrc: "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
    }
]

export default function CategoryPage() {
    return (
        <div className="flex flex-wrap gap-3">
            {
                data.map((item) => (
                    <CategoryCard key={item.id} category={item} />
                ))
            }
        </div>

    );
}
