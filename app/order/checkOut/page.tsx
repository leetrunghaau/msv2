"use client"

import { title } from "@/components/primitives";
import { formatPrice } from "@/helper/uilt";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center w-full mt-5 gap-4">
    <div>
        
    </div>
    <div className="sticky top-24 max-h-[70vh] min-w-[280px]">
        <Card>
            <CardHeader className="justify-center text-xl">Thông tin đặt hàng</CardHeader>
            <CardBody>
                <div className="grid grid-cols-3 gap-2">
                    <p className="col-span-2 text-sm text-default-700">Tổng tiền:</p>
                    <p className="text-sm text-right mr-4 text-default-700">{formatPrice(500000)}</p>

                    <p className="col-span-2 text-sm text-default-700">Giao hàng:</p>
                    <p className="text-sm text-right mr-4 text-default-700">{formatPrice(5000)}</p>

                    <p className="col-span-2 text-sm text-default-700">Giảm giá:</p>
                    <p className="text-sm text-right mr-4 text-success">{formatPrice(50000)}</p>

                    <Divider className="col-span-3 mb-2" />

                    <p className="col-span-2 text-default-700">Tổng tiền:</p>
                    <p className="text-right mr-4 text-default-700">{formatPrice(500000)}</p>
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex flex-col gap-3">
                    <div className="flex w-full gap-3">
                        <Input placeholder="Mã khuyến mãi" />
                        <Button variant="bordered" color="primary">Áp dụng</Button>
                    </div>
                    <Link href="/order/checkOut" className="w-full ">
                        <Button className="w-full" color="primary">Đặt hàng</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    </div>
</div>
  );
}
