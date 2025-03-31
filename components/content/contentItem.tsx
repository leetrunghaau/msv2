"use client";

import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { cn } from '@heroui/theme';
import React from 'react';

type ContentItemProps = {
    title: string;
    data: boolean;
};

const ContentItem: React.FC<ContentItemProps> = ({ title, data }) => {
    return (

        <Card className={cn(
            "relative flex w-100 max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium",
        )}>
            <CardBody className='p-0'>
                <Image
                    src="https://cdn-media.sforum.vn/storage/app/media/Van%20Pham/7/hinh-nen-desktop-32.jpg"
                    alt="Album cover"
                    className="object-cover relative rounded-large w-full h-48"
                    />
            </CardBody>
            <CardFooter></CardFooter>
            <h3 className="text-medium font-medium text-default-700">{title}</h3>
            <p className="text-small text-default-500">20-01-2001</p>
        </Card>
    );
};
ContentItem.displayName = 'ContentItem';
export default ContentItem;
