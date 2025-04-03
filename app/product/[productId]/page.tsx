"use client";

import { cn } from "@heroui/theme";
import { Image } from '@heroui/image';
import { ScrollShadow } from '@heroui/scroll-shadow';
import RatingRadioGroup from "@/components/rating/ratingRadioGroup";
import { formatPrice } from "@/helper/uilt";
import { NumberInput } from "@heroui/number-input";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { esp32C3SpecsList, productDetail } from "@/data/product";
import { useState } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";


// https://www.thegioiic.com/upload/large/51848.jpg

const columns = [
    {
        key: "key",
        label: "THÔNG SỐ KỸ THUẬT",
    },
    {
        key: "value",
        label: "giá trị",
    }
];
export type ProductDetailType = {
    id: number;
    name: string;
    price: number;
    total: number;
    code: string;
    branch: string;
    description: string;
    src: string[];
    detail: {
        describe: Array<{ index: number; content: string }>;
        parameter: Array<{ key: string; value: string }>;
    };
};
export default function ProductDetailPage() {
    const [amount, setAmount] = useState(1)
    const [indexImg, setIndexImg] = useState(productDetail.src[0])
    return (
        <div >
            <Breadcrumbs className="my-4">
                <BreadcrumbItem href="/">Math solver VN</BreadcrumbItem>
                <BreadcrumbItem href="#">Sản phẩm</BreadcrumbItem>
                <BreadcrumbItem href="#">Kit Wifi</BreadcrumbItem>
                <BreadcrumbItem href="#">Esp</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex gap-10 justify-between mx-4">
                <div className="flex justify-start items-center flex-col gap-4">
                    <Image
                        isZoomed
                        src={indexImg}
                        className="w-96 h-60 object-cover"
                    />
                    <ScrollShadow
                        orientation="horizontal"
                        size={20}
                        className="w-96"
                    >
                        <div
                            className="flex justify-start gap-2 py-3 px-4 "
                            style={{ width: `${(productDetail.src.length * 104) - 8}px` }}
                        >
                            {productDetail.src.map((item, i) => (
                                <Image
                                    key={i}
                                    src={item}
                                    className="w-24 h-24 cursor-pointer"
                                    onClick={() => {
                                        setIndexImg(item)
                                    }}

                                />
                            ))}

                        </div>
                    </ScrollShadow>
                </div>
                <div className="flex flex-col gap-4 w-1/2 justify-start items-start">
                    <h1 className="text-2xl font-semibold text-secondary">{productDetail.name}</h1>
                    {/* <RatingRadioGroup
                        hideStarsText
                        isReadOnly
                        
                        className="gap-1"
                        label={<p className="text-small text-default-400">({3} lượt đánh giá)</p>}
                        size="sm"
                        value="4"
                    /> */}
                    <p className="text-lg font-semibold text-default-800">Giá: {formatPrice(productDetail.price)}</p>
                    <p className={cn("text-medium font-normal text-success", productDetail.total == 0 ? "text-danger" : "text-success")}>{productDetail.total == 0 ? "Sản phẩm tạm hết hàng." : "Sản phẩm hiện đang còn hàng."}</p>
                    <p className="text-sm font-normal text-default-800">Mã sản phẩm: {productDetail.code}</p>
                    <p className="text-sm font-normal text-default-800">Thương hiệu: {productDetail.branch}</p>
                    <p className="text-sm font-normal text-default-800">Mô tả: {productDetail.description}</p>
                    <div className="flex gap-4 w-full items-end justify-between flex-wrap mt-8">
                        <div className="flex gap-2 items-center justify-start max-w-[200px]">
                            <NumberInput
                                hideStepper
                                size="sm"
                                label={`(tồn kho ${productDetail.total})`}
                                labelPlacement="outside"
                                isDisabled={productDetail.total == 0 ? true : false}
                                startContent={
                                    <Button
                                        size="sm"
                                        variant="light"
                                        color="secondary"
                                        isIconOnly
                                        isDisabled={amount == 1}
                                        onPress={() => setAmount(amount - 1)}
                                    >
                                        <Icon icon={"streamline:subtract-1-solid"} />
                                    </Button>}
                                endContent={
                                    <Button
                                        size="sm"
                                        variant="light"
                                        color="secondary"
                                        isIconOnly
                                        isDisabled={amount == productDetail.total}
                                        onPress={() => setAmount(amount + 1)}
                                    >
                                        <Icon icon={"akar-icons:plus"} />
                                    </Button>}
                                className="max-w-44 input-cen"
                                minValue={1}
                                maxValue={productDetail.total}
                                value={amount}
                                onValueChange={setAmount}
                            />
                        </div>
                        <Button
                            variant="bordered"
                            color="secondary"
                            size="sm"
                            className="grow"
                            isDisabled={productDetail.total == 0 ? true : false}
                            startContent={<Icon icon="mynaui:cart-check" className="text-secondary" width={20} />}
                        >Thêm vào giỏ hàng</Button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-4 w-full justify-start items-start mt-10">
                <h2 className="text-2xl font-semibold text-default-800">Chi tiết sản phẩm</h2>
                <p className="text-sm font-normal text-default-800"></p>
                <p className="text-sm font-normal text-default-800"></p>
                <p className="text-sm font-normal text-default-800"></p>
            </div>
            <div className="flex flex-col gap-4 w-full justify-start items-start mt-10">
                <h2 className="text-2xl font-semibold text-default-800">Thông số kỹ thuật</h2>
                <Table
                    hideHeader
                    aria-label="Example table with dynamic content"
                    selectionBehavior="replace"
                    selectionMode="multiple"
                >
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={productDetail.detail.parameter}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>

    )
}
