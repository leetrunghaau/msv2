"use client";

import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { cn } from '@heroui/theme';
import React from 'react';

type CategoryCardProps = {
    category: {
        id: number;
        name: string;
        imgSrc: string;
    }
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
    return (
        <Card className={cn(
            "relative flex w-48  flex-none scroll-ml-6 flex-col gap-2 rounded-large bg-content1 p-4 shadow-medium cursor-pointer transition-all hover:translate-y-[-5px] hover:shadow-xl",
        )}>
            <CardBody className='p-0'>
                <Image
                    src={category.imgSrc}
                    alt="Album cover"
                    className="object-cover relative rounded-large w-full h-28 "
                />
            </CardBody>
            <CardFooter>
                <h3 className="text-medium font-medium text-default-600">{category.name}</h3>
            </CardFooter>
        </Card>
    );
};
CategoryCard.displayName = 'CategoryCard';
export default CategoryCard;
