"use client";
import { Image } from '@heroui/image';
import React, { useState, useEffect } from 'react';
import { cn } from '@heroui/theme';
import { Icon } from '@iconify/react';
import { usePagination } from '@heroui/pagination';

const images = [
    "https://cdn.hostingviet.vn/data/images/article/hinh-nen-may-tinh-4k-1.jpg",
    "https://ocafe.net/wp-content/uploads/2024/10/anh-nen-may-tinh-4k-1.jpg",
    "https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"

];

const Banner = React.forwardRef<HTMLInputElement>((props, ref) => {
    const { activePage, range, setPage, onNext, onPrevious } = usePagination({
        total: images.length,
    });
    // setInterval(() => {
    //     if (activePage === images.length) {
    //         setPage(1);
    //     }else{
    //         onNext();
    //     }
    // }, 4000);
    return (
        <div
            className={
                cn("w-full h-96 relative overflow-hidden rounded-lg flex justify-between items-center ")
            }
            style={{
                backgroundImage: `url(${images[activePage -1]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div >
                {activePage != 1 ?
                    <Icon
                        icon="solar:alt-arrow-left-outline"
                        width={50}
                        onClick={onPrevious}
                        aria-label="Previous Page"
                    /> : <div></div>
                }
            </div>
            <div className="h-full flex items-end justify-center">
                <ul className="flex gap-2 items-center mb-4">
                    {range.map((page: any) => {
                        return (
                            <li key={page} aria-label={`page ${page}`}>
                                <Icon
                                    icon="stash:minus-solid"
                                    color={activePage === page ? 'rgba(255, 255, 255, 0.68)' : 'rgba(237, 0, 0, 0.34)'}
                                    width={50}
                                    onClick={() => setPage(page)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                {images.length != activePage  ?
                    <Icon
                        icon="solar:alt-arrow-right-outline"
                        width={50}
                        onClick={onNext}
                        aria-label="Next Page"
                    /> : <div></div>
                }

            </div>
        </div>
    );
});

Banner.displayName = "Banner";
export default Banner;
