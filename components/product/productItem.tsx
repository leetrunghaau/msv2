"use client";

import React from "react";
import { Icon } from "@iconify/react";

import RatingRadioGroup from "@/components/rating/ratingRadioGroup";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import { formatPrice } from "@/helper/uilt";
import { Link } from "@heroui/link";


export type ProductItem = {
  id: string;
  name: string;
  href: string;
  price: number;
  description?: string;
  imageSrc: string;
};

export type ProductListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
  baner?: string;
} & ProductItem;

const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
  (
    {
      name,
      price,
      baner,
      description,
      imageSrc,
      href,
      className,
      ...props
    },
    ref,
  ) => {

    return (
      <div
        ref={ref}
        className={cn(
          " flex w-60 max-w-80 flex-none scroll-ml-6 flex-col gap-3 rounded-large bg-content1 p-4 shadow-medium",
          className,
        )}
        {...props}
      >
        {/* ------------------------ */}
        {baner ? (
          <span className="absolute right-7 top-7 z-20 text-tiny font-semibold text-default-400">
            NEW
          </span>
        ) : null}


        {/* --------------------------------- */}
        <Link href={`/product/${href}`}>
          <Image
            // radius=""
            isZoomed
            // removeWrapper

            alt={name}
            className={cn(
              "z-0 h-full max-h-full w-full overflow-visible cursor-pointer ",
            )}
            src={imageSrc}

          />
        </Link>;

        {/* ---------------------------- */}
        <div className="flex flex-col gap-3 px-1 h-full justify-between">
          <div
            className={cn("flex flex-wrap items-center justify-between")}
          >
            <h3 className="text-medium font-medium text-default-700">{name}</h3>
            <p className="text-medium font-medium text-default-500">{formatPrice(price)}</p>
          </div>


          <p className="text-small text-default-500">{description}</p>


          <div className="flex gap-2">
            <Button
              fullWidth
              className="font-medium"
              color="secondary"
              radius="lg"
              variant={"flat"}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

ProductListItem.displayName = "ProductListItem";

export default ProductListItem;
