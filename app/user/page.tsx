"use client"


import { orders } from "@/data/product";
import { formatPrice } from "@/helper/uilt";
// import { useDisclosure } from "@/helper/useDisclosure";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/drawer";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { useDisclosure } from "@heroui/modal";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { Tab, Tabs } from "@heroui/tabs";
import { Icon } from "@iconify/react";
import { useCallback, useState } from "react";

const columns = [
  {
    key: "code",
    label: "Mã đơn hàng",
  },
  {
    key: "date",
    label: "Ngày mua",
  },
  {
    key: "total",
    label: "Tổng tiền",
  },
  {
    key: "state",
    label: "Trạng thái",
  },
  {
    key: "ditail",
    label: "",
  }
];
export type OrderItem = {
  id: number;
  code: string;
  date: Date;
  total: number;
  state: "accept" | "transferred" | "delivery" | "delivered" | "cancel"
}
const stateType = {
  accept: { color: "secondary" as const, lable: "Tiếp nhận" },
  transferred: { color: "primary" as const, lable: "Giao shipper" },
  delivery: { color: "warning" as const, lable: "Giao hàng" },
  delivered: { color: "success" as const, lable: "Hoàn thành" },
  cancel: { color: "danger" as const, lable: "Đã hủy" },
}

export default function UserPage() {
  const [tab, setTab] = useState<string | number>("all")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()


  const renderCell = (item: OrderItem, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof OrderItem];
    switch (columnKey) {
      case "ditail":
        return (
          <Button
            isIconOnly
            variant="light"
            color="secondary"
            onPress={onOpen}>

            <Icon icon={"material-symbols:more-outline-rounded"} width={25} />
          </Button>
        )
      case "date":
        return cellValue instanceof Date ? cellValue.toLocaleDateString() : cellValue;
      case "state":
        if (stateType[cellValue as keyof typeof stateType]) {
          return (
            <Chip color={stateType[cellValue as keyof typeof stateType].color} variant="bordered">{stateType[cellValue as keyof typeof stateType].lable}</Chip>
          );
        } else {
          return <p className="text-danger">Unknown State</p>; // Xử lý trường hợp không hợp lệ
        }
      case "total":
        return formatPrice(Number(cellValue))
      default:
        return String(cellValue);
    }

  };
  return (
    <div className="flex flex-col gap-3">
      <Tabs aria-label="Options" selectedKey={tab} onSelectionChange={setTab} fullWidth >
        <Tab key="all" title="Tất cả đơn hàng" >
        </Tab>
        <Tab key="accept" title="Tiếp nhận">
        </Tab>
        <Tab key="transferred" title="Giao shipper">
        </Tab>
        <Tab key="delivery" title="Giao hàng">
        </Tab>
        <Tab key="delivered" title="Hoàn thành">
        </Tab>
        <Tab key="cancel" title="Đã hủy">
        </Tab>
      </Tabs>
      <div className="flex gap-3">
        <Input
          startContent={

            <Icon icon={"material-symbols:search-rounded"} onClick={() => {
              onOpen()
            }} />
          }
        />
        <Button variant="ghost" color="secondary">Tìm đơn hàng</Button>
      </div>
      <Table
        aria-label="Example table with dynamic content"
        selectionBehavior="replace"
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={orders}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Drawer backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Chi tiết đơn hàng</DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col w-full gap-4">
                  
                  <Chip color="success" variant="bordered" className="ml-auto">Giao hàng thành công</Chip>
                  <Divider />
                  <div>
                    <p className="text-sm text-default-500">Mã đơn hàng: <span>ORD001</span></p>
                    <p className="text-sm text-default-500">Ngày đặt hàng: <span>20-12-2025</span></p>
                    <p className="text-sm text-default-500">Phương thức thanh toán: <span>momo</span></p>
                  </div>
                  <Divider />
                  <div>
                    <h2 className="text-lg  text-default-800">Địa chỉ giao hàng</h2>
                    <p className="text-sm text-default-500">11a, đinh cũng viên, phường phước long a, tp, Thủ đức, tp. HCM</p>
                  </div>
                  <Divider />

                  <div className="grid grid-cols-4 items-center gap-y-4">
                    <Image src="https://www.thegioiic.com/upload/large/50108.jpg" width={80} height={80} />
                    <div className="col-span-2 flex flex-col justify-between h-full">
                      <h4 className="text-medium">động cơ dc 12v</h4>
                      <div>
                        <p className="text-sm text-default-500">x10</p>
                        <p className="text-sm text-default-500">{formatPrice(60000)}</p>
                      </div>
                    </div>
                    <p>{formatPrice(60000)}</p>
                    <Image src="https://www.thegioiic.com/upload/large/50108.jpg" width={80} height={80} />
                    <div className="col-span-2 flex flex-col justify-between h-full">
                      <h4 className="text-medium">động cơ dc 12v</h4>
                      <div>
                        <p className="text-sm text-default-500">x10</p>
                        <p className="text-sm text-default-500">{formatPrice(60000)}</p>
                      </div>
                    </div>
                    <p>{formatPrice(60000)}</p>
                  </div>
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


              </DrawerBody>
              <DrawerFooter>

                <Button color="secondary" variant="ghost" onPress={onClose}>
                  Thoát
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
