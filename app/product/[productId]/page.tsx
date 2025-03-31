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
import { esp32C3SpecsList } from "@/data/product";
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
export default function ProductDetailPage() {
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
                        src="https://www.thegioiic.com/upload/large/51847.jpg"
                        className="w-96 h-60 object-cover"
                    />
                    <ScrollShadow
                        orientation="horizontal"
                        size={20}
                        className="w-96"
                    >
                        <div className="flex justify-start gap-6 py-3 px-4 w-[750px]">
                            <Image
                                src="https://www.thegioiic.com/upload/large/51848.jpg"
                                className="w-24 h-24"
                            />
                            <Image
                                src="https://www.thegioiic.com/upload/large/51849.jpg"
                                className="w-24 h-24"
                            />
                            <Image
                                src="https://www.thegioiic.com/upload/large/51850.jpg"
                                className="w-24 h-24"
                            />
                            <Image
                                src="https://www.thegioiic.com/upload/large/51848.jpg"
                                className="w-24 h-24"
                            />
                            <Image
                                src="https://www.thegioiic.com/upload/large/51849.jpg"
                                className="w-24 h-24"
                            />
                            <Image
                                src="https://www.thegioiic.com/upload/large/51850.jpg"
                                className="w-24 h-24"
                            />
                        </div>
                    </ScrollShadow>
                </div>
                <div className="flex flex-col gap-4 w-1/2 justify-start items-start">
                    <h1 className="text-2xl font-semibold text-primary">ESP32-S3</h1>
                    {/* <RatingRadioGroup
                        hideStarsText
                        isReadOnly
                        
                        className="gap-1"
                        label={<p className="text-small text-default-400">({3} lượt đánh giá)</p>}
                        size="sm"
                        value="4"
                    /> */}
                    <p className="text-lg font-semibold text-default-800">Giá: {formatPrice(150000)}</p>
                    <p className="text-medium font-normal text-success">Sản phẩm hiện đang còn hàng.</p>
                    <p className="text-sm font-normal text-default-800">Mã sản phẩm: ESP32-S3</p>
                    <p className="text-sm font-normal text-default-800">Thương hiệu: ESP32</p>
                    <p className="text-sm font-normal text-default-800">Mô tả: Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.</p>
                    <div className="flex gap-4 w-full items-center justify-between flex-wrap mt-8">
                        <div className="flex gap-2 items-center justify-start max-w-[200px]">
                            <NumberInput
                                defaultValue={1}
                                minValue={1}
                                maxValue={1024}
                                label="Số lượng"
                                className="w-40"
                            />
                        </div>
                        <Button
                            variant="bordered"
                            color="primary"
                            className=" w-60 grow h-14"
                            startContent={<Icon icon="mynaui:cart-check" className="text-primary" width={45} />}
                        >Thêm vào giỏ hàng</Button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-4 w-full justify-start items-start mt-10">
                <h2 className="text-2xl font-semibold text-default-800">Chi tiết sản phẩm</h2>
                <p className="text-sm font-normal text-default-800">Kit phát triển WiFi  Bluetooth ESP32-C3 Super Mini là một phiên bản nhỏ gọn nhưng mạnh mẽ của dòng vi điều khiển ESP32-C3. Được thiết kế đặc biệt cho các ứng dụng Internet of Things (IoT), sản phẩm này cung cấp khả năng kết nối không dây ổn định và hiệu quả, phù hợp cho nhiều dự án sáng tạo và phát triển sản phẩm.</p>
                <p className="text-sm font-normal text-default-800">Với Wi-Fi 802.11 b/g/n và Bluetooth Low Energy (BLE), ESP32-C3 Super Mini cho phép thiết lập kết nối không dây nhanh chóng và linh hoạt. Việc hỗ trợ nhiều giao thức kết nối giúp sản phẩm dễ dàng tích hợp vào các thiết bị thông minh và hệ thống tự động hóa trong nhà, cũng như các ứng dụng yêu cầu truyền tải dữ liệu với mức tiêu thụ năng lượng thấp.</p>
                <p className="text-sm font-normal text-default-800">Bộ xử lý RISC-V lõi đơn của ESP32-C3 Super Mini mang lại hiệu suất mạnh mẽ trong khi vẫn tối ưu hóa việc sử dụng năng lượng. Với khả năng tiết kiệm năng lượng cao và kích thước nhỏ gọn, kit phát triển này là lựa chọn lý tưởng cho các thiết bị di động, cảm biến từ xa, và các giải pháp IoT cần tối ưu hóa không gian và năng lượng..</p>
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
                    <TableBody items={esp32C3SpecsList}>
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
