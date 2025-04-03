"use client"

import { formatPrice } from "@/helper/uilt"
import { Button, ButtonGroup } from "@heroui/button"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import { Divider } from "@heroui/divider"
import { Input } from "@heroui/input"
import { useEffect, useState } from "react"
import Address, { AddressType } from "@/components/order/address"
import CartItem, { CartItemType } from "@/components/order/cartItem"
import { carts } from "@/data/product"


export default function CartPage() {
    const [address, setAddress] = useState<AddressType>({ state: false, province: '', district: '', commune: '', detail: '' })
    const [cartItems, setCartItems] = useState<CartItemType[]>(carts)
    useEffect(() => {
        console.log("new address is ===========>", address)
    }, [address])
    useEffect(() => {
        console.log("new cartItem is ===========>", cartItems)
    }, [cartItems])
    return (
        <div className="flex justify-center w-full mt-5 gap-4">
            <div>
                {cartItems.map((item) => (
                    <CartItem
                        item={item}
                        cartItemChange={(id, amount, selected) => {
                            setCartItems(prevCartItems =>
                                prevCartItems.map(item =>
                                    item.id === id ? { ...item, amount: amount, selected: selected } : item
                                )
                            );

                        }}
                        cartItemDelete={(id) => {
                            setCartItems(prevCartItems =>
                                prevCartItems.filter(item => item.id !== id)
                            );
                        }}
                    />
                ))}
            </div>
            <div className="sticky top-24 max-h-[70vh] min-w-[280px]">
                <Card className="w-80">
                    <CardHeader className="justify-center text-xl text-secondary">Thông tin thanh toán</CardHeader>
                    <CardBody>
                        <div className="flex flex-col gap-2">
                            <Divider />
                            <h2 className="text-center">Chọn địa điểm giao hàng</h2>
                            <Address onAddressChange={(newAddress) => {
                                setAddress(newAddress)

                            }} />
                            <Divider />

                            <div className="grid grid-cols-2 gap-2">
                                <p className="col-span-2 text-sm text-default-700">Tạm tính:</p>
                                <p className="text-sm text-right mr-4 text-default-700">{formatPrice(500000)}</p>

                                <p className="col-span-2 text-sm text-default-700">Giao hàng:</p>
                                <p className="text-sm text-right mr-4 text-default-700">{formatPrice(5000)}</p>

                                <p className="col-span-2 text-sm text-default-700">Giảm giá:</p>
                                <p className="text-sm text-right mr-4 text-success">{formatPrice(50000)}</p>

                                <Divider className="col-span-3 mb-2" />

                                <p className="col-span-2 text-default-700">Tổng tiền:</p>
                                <p className="text-right mr-4 text-default-700">{formatPrice(500000)}</p>
                            </div>
                        </div>

                    </CardBody>
                    <CardFooter>
                        <div className="flex flex-col gap-3">
                            <div className="flex w-full gap-3">
                                <Input placeholder="Mã khuyến mãi" />
                                <Button variant="bordered" color="secondary">Áp dụng</Button>
                            </div>
                            <Button className="w-full" color="secondary" isDisabled={address.state ? false : true}>Thanh toán</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>


    )
}
