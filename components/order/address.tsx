"use client";

import { Select, SelectItem } from "@heroui/select";
import { Tab, Tabs } from "@heroui/tabs";
import { useState } from "react";
import VNData from '@/data/vn.json';
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";

interface Commune {
    Id: string;
    Name: string;
    Level: string;
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

export type AddressType = {
    state: boolean;
    province: string;
    district: string;
    commune: string;
    detail: string
}

type AddressPops = {
    onAddressChange: (address: AddressType) => void;
};

const Address: React.FC<AddressPops> = ({ onAddressChange }) => {
    const provinces: Province[] = VNData as Province[];
    const [provinceSelected, setProvinceSelected] = useState<string>("");
    const [districts, setDistricts] = useState<District[]>([]);
    const [districtSelected, setDistrictSelected] = useState<string>("");
    const [communes, setCommunes] = useState<Commune[]>([]);
    const [communeSelected, setCommuneSelected] = useState<string>("");
    const [streetAddress, setStreetAddress] = useState<string>("");
    const [tab, setTab] = useState<string>("")

    const handleAddressChange = (index: string) => {
        const rs: AddressType = { state: false, province: '', district: '', commune: '', detail: '' };
      
        if (index === "shop") {
          rs.state = true;
          rs.province = "hcm";
          rs.district = "Thủ Đức";
          rs.commune = "Phường Phước Long A";
          rs.detail = "11a, Đinh Cũng Viên";
        } else if (index === "address") {
          rs.state = true;
          rs.province = provinces.find((province) => province.Id === provinceSelected)?.Name ?? '';
          rs.district = districts.find((district) => district.Id === districtSelected)?.Name ?? '';
          rs.commune = communes.find((commune) => commune.Id === communeSelected)?.Name ?? '';
          rs.detail = streetAddress;
        }
        onAddressChange(rs);
      };

    return (
        <div className="flex flex-col gap-3">
            <ButtonGroup fullWidth>
                <Button
                    // color={tab == "shop" ? "secondary" : "default"}
                    color="secondary"
                    variant={tab == "shop" ? "bordered" :  "light"}
                    onPress={() => {
                        setTab(tab != "shop" ? "shop" : "")
                        handleAddressChange(tab != "shop" ? "shop" : "")
                    }}
                >
                    Tại cửa hàng
                </Button>
                <Button
                    // color={tab == "address" ? "secondary" : "default"}
                    color="secondary"
                    variant={tab == "address" ? "bordered" : "light"}
                    onPress={() => {
                        setTab(tab != "address" ? "address" : "")
                        handleAddressChange(tab != "address" ? "address" : "")
                    }}
                >
                    Địa chỉ riêng
                </Button>
            </ButtonGroup>
            {
                tab == "shop" ?
                    <p className="text-sm text-default-700">11a. Đinh Cũng Viên, Phường Phức Long A, TP Thủ Đức TP HCM</p> : <></>
            }
            {
                tab == "address" ?
                    <>
                        <Select
                            size="sm"
                            items={provinces}
                            placeholder="Chọn tỉnh"
                            labelPlacement="outside"
                            label="Tỉnh/TP"
                            selectedKeys={[provinceSelected]}
                            onChange={(e) => {
                                setProvinceSelected(e.target.value);
                                const districtList = provinces.find((province) => province.Id === e.target.value)?.Districts ?? [];
                                setDistrictSelected("")
                                setDistricts(districtList);
                                setCommuneSelected("")
                                setCommunes([]);
                                handleAddressChange("address")

                            }}
                        >
                            {(t: Province) => <SelectItem key={t.Id}>{t.Name}</SelectItem>}
                        </Select>

                        <Select
                            size="sm"
                            items={districts}
                            placeholder="Chọn huyện"
                            labelPlacement="outside"
                            label="Huyện/TP"
                            selectedKeys={[districtSelected]}
                            onChange={(e) => {
                                setDistrictSelected(e.target.value);
                                const communeList = districts.find((dist) => dist.Id === e.target.value)?.Wards ?? [];
                                setCommuneSelected("")
                                setCommunes(communeList);
                                handleAddressChange("address")

                            }}
                        >
                            {(t: District) => <SelectItem key={t.Id} >{t.Name}</SelectItem>}
                        </Select>

                        <Select
                            size="sm"
                            items={communes}
                            placeholder="Chọn xã"
                            labelPlacement="outside"
                            label="Phường/Xã"
                            selectedKeys={[communeSelected]}
                            onChange={(e) => {
                                setCommuneSelected(e.target.value)
                                handleAddressChange("address")

                            }}
                            

                        >
                            {(t: Commune) => <SelectItem key={t.Id}>{t.Name}</SelectItem>}
                        </Select>
                        <Input
                            size="sm"
                            placeholder="Số nhà/Tên đường"
                            value={streetAddress}
                            onChange={(e) => {
                                setStreetAddress(e.target.value)
                                handleAddressChange("address")

                            }}
                        />
                    </> : <></>
            }

        </div>

    );
};

Address.displayName = 'Address';
export default Address;
