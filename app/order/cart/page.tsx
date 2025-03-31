"use client"

import RowSteps from "@/components/uilt/rowSteps"
import { formatPrice } from "@/helper/uilt"
import { Button, ButtonGroup } from "@heroui/button"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import { Checkbox } from "@heroui/checkbox"
import { Divider } from "@heroui/divider"
import { Image } from "@heroui/image"
import { Input } from "@heroui/input"
import { Link } from "@heroui/link"
import { NumberInput } from "@heroui/number-input"
import { ScrollShadow } from "@heroui/scroll-shadow"
import { Select, SelectItem } from "@heroui/select"
import { Tab, Tabs } from "@heroui/tabs"
import { Icon } from "@iconify/react"
import VNData from "@/data/vn.json"
import { useState } from "react"
import { Switch } from "@heroui/switch"
const cart = (
    <Card className="mb-4 grow-0">
        <CardBody >
            <div className="flex items-center gap-4  min-w-[560px] ">
                <Checkbox />
                <div>
                    <Image
                        shadow="sm"
                        alt="Dây Bus cái XH2.54mm dài 20cm"
                        src="https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg"
                        className="max-w-32 max-h-32 object-cover"
                    />
                </div>

                <div className="flex flex-col gap-3 max-w-xl">
                    <h1 className="text-xl">ESP32-S3</h1>
                    <p className="text-xs text-default-800">Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.</p>
                    <div className="flex justify-between" >
                        <NumberInput
                            hideStepper
                            size="sm"
                            startContent={<Button variant="light" color="primary" isIconOnly><Icon icon={"streamline:subtract-1-solid"} /></Button>}
                            endContent={<Button variant="light" color="primary" isIconOnly><Icon icon={"akar-icons:plus"} /></Button>}
                            className="max-w-40"
                        />
                        <div className="">
                            <p>Giá: {formatPrice(150000)}</p>
                            <p>Tạm tính: {formatPrice(150000)}</p>

                        </div>
                    </div>
                </div>
                <Icon icon={"hugeicons:cancel-02"} width={25} />
            </div>
        </CardBody>
    </Card>
)
interface Commune {
    Id: string;
    Name: string;
    Level: string
}

interface District {
    Id: string;
    Name: string;
    Wards: Commune[];
}

interface Province {
    Id: string;
    Name: string;
    Districts: District[];
}

export default function CartPage() {
    const provinces: Province[] = VNData as Province[];
    const [provinceSelected, setProvinceSelected] = useState("")
    const [districts, setDistricts] = useState<District[]>([])
    const [districtSelected, setDistrictSelected] = useState("")
    const [communes, setCommunes] = useState<Commune[]>([])
    const [communeSelected, setCommuneSelected] = useState("")
    const [isAddress, setIsaddress] = useState<boolean>(false)


    return (
        <div className="flex justify-center w-full mt-5 gap-4">
            <div>
                {cart}
                {cart}
                {cart}
                {cart}
                {cart}
                {cart}
                {cart}
                {cart}
                {cart}
            </div>
            <div className="sticky top-24 max-h-[70vh] min-w-[280px]">

                <Card className="w-80">
                    <CardHeader className="justify-center text-xl text-secondary">Thông tin thanh toán</CardHeader>
                    <CardBody>
                        <div className="flex flex-col gap-2">
                            <Divider />
                            <div className="flex gap-3">
                                <h2 className="text-center">Địa chỉ giao hàng</h2>
                                <Checkbox
                                    color="secondary"
                                    isSelected={isAddress}
                                    onValueChange={setIsaddress}

                                />
                            </div>
                            {isAddress ? <Tabs aria-label="Options" fullWidth>
                                <Tab key="shop" title="Tại cửa hàng">
                                    <p className="text-sm text-default-700">11a. Đinh Cũng Viên, Phường Phức Long A, TP Thủ ĐứcTP HCM</p>
                                </Tab>
                                <Tab key="address" title="Địa chỉ riêng">
                                    <div className="flex flex-col gap-2 w-full">
                                        <Select
                                            size="sm"
                                            items={provinces}
                                            placeholder="Chọn tỉnh"
                                            selectedKeys={[provinceSelected]}
                                            onChange={(e) => {
                                                setProvinceSelected(e.target.value);
                                                const districtList = provinces.find((province) => province.Id === e.target.value)?.Districts ?? []
                                                setDistricts(districtList);
                                                setCommunes([]);
                                            }}
                                        >
                                            {(t: Province) => <SelectItem key={t.Id} >{t.Name}</SelectItem>}
                                        </Select>
                                        <Select
                                            size="sm"
                                            items={districts}
                                            placeholder="Chọn huyện"
                                            selectedKeys={[districtSelected]}

                                            onChange={(e) => {
                                                setDistrictSelected(e.target.value)
                                                const communeList = districts.find((dist) => dist.Id === e.target.value)?.Wards ?? [];
                                                setCommunes(communeList);
                                            }}
                                        >
                                            {(t: District) => <SelectItem key={t.Id} >{t.Name}</SelectItem>}
                                        </Select>
                                        <Select
                                            size="sm"
                                            items={communes}
                                            selectedKeys={[communeSelected]}

                                            placeholder="Chọn xã"
                                            onChange={(e) => {
                                                setCommuneSelected(e.target.value)
                                                
                                            }}
                                        >
                                            {(t: Commune) => <SelectItem key={t.Id} >{t.Name}</SelectItem>}
                                        </Select>
                                        <Input size="sm" placeholder="Số nhà/Tên đường" />
                                    </div>
                                </Tab>


                            </Tabs> : <></>
                            }
                            <Divider />

                            <div className="grid grid-cols-2 gap-2">
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
                        </div>

                    </CardBody>
                    <CardFooter>
                        <div className="flex flex-col gap-3">
                            <div className="flex w-full gap-3">
                                <Input placeholder="Mã khuyến mãi" />
                                <Button variant="bordered" color="secondary">Áp dụng</Button>
                            </div>
                            <Button className="w-full" color="secondary" isDisabled={isAddress ? false : true}>Đặt hàng</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>


    )
}