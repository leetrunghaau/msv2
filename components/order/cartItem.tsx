"use client";


import { formatPrice } from "@/helper/uilt";
import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { NumberInput } from "@heroui/number-input";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";



export type CartItemType = {
    selected: boolean;
    id: number;
    src: string;
    name: string;
    decripsition: string;
    price: number;
    amount: number;
    total: number;
}

type AddressPops = {
    item: CartItemType
    cartItemChange: (id: number, amount: number, selected: boolean) => void;
    cartItemDelete: (id: number) => void;
};



const CartItem: React.FC<AddressPops> = ({ item, cartItemChange, cartItemDelete }) => {
    const [amount, setAmount] = useState(item.amount)

    const handleDeleteCartItem = () => {
        cartItemDelete(item.id)
    }

    useEffect(() => {
        cartItemChange(item.id, amount, item.selected)
    }, [amount]);
    return (
        <Card className="mb-4 grow-0">
            <CardBody >
                <div className="flex items-center gap-4  min-w-[560px] ">
                    <Checkbox isSelected={item.selected} onValueChange={(value)=>{cartItemChange(item.id, item.amount, value)}}/>
                    <div>
                        <Image

                            shadow="sm"
                            alt={item.name}
                            // src="https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg"
                            src={item.src}
                            className="max-w-32 max-h-32 object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-3 max-w-xl">
                        <h1 className="text-lg">{item.name}</h1>
                        <p className="text-xs text-default-800">{item.decripsition}</p>
                        <Divider />
                        <div className="flex justify-between items-center" >
                            <NumberInput
                                hideStepper
                                size="sm"
                                label={`Số lượng (tồn kho ${item.total})`}
                                labelPlacement="outside"
                                startContent={
                                    <Button
                                        size="sm"
                                        variant="light"
                                        color="secondary"
                                        isIconOnly
                                        isDisabled={item.amount == 1}
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
                                        isDisabled={item.amount == item.total}
                                        onPress={() => setAmount(amount + 1)}
                                    >
                                        <Icon icon={"akar-icons:plus"} />
                                    </Button>}
                                className="max-w-44 input-cen"
                                minValue={1}
                                maxValue={item.total}
                                value={amount}
                                onValueChange={setAmount}
                            />
                            <div className="">
                                <p className="text-sm text-default-700">Giá: {formatPrice(item.price)}</p>
                                <p className="text-sm text-default-700">Tạm tính: {formatPrice(item.price * amount)}</p>

                            </div>
                        </div>
                    </div>
                    <Icon icon={"hugeicons:cancel-02"} width={25} className={"hover:text-danger hover:cursor-pointer duration-300 ease-in-out"} onClick={handleDeleteCartItem} />
                </div>
            </CardBody>
        </Card>

    );
};

CartItem.displayName = 'CartItem';
export default CartItem;
