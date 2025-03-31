"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { cn } from "@heroui/theme";
import { Icon } from '@iconify/react';

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const data = [
    {
      id: 1,
      name: "Linh kiện loại a",
      leaf: false,
      children: [
        {
          id: 1,
          leaf: true,
          name: "Linh kiện a",
          children: [],
        },
        {
          id: 2,
          leaf: true,
          name: "Linh kiện b",
          children: [],
        },
        {
          id: 3,
          leaf: true,
          name: "Linh kiện c",
          children: [],
        },
      ],
    },
    {
      id: 2,
      leaf: false,
      name: "Linh kiện loại b",
      children: [{
        id: 1,
        leaf: false,
        name: "Linh kiện a",
        children: [],
      },
      {
        id: 2,
        leaf: true,
        name: "Linh kiện b",
        children: [],
      },
      {
        id: 3,
        leaf: true,
        name: "Linh kiện c",
        children: [],
      },],
    },
    {
      id: 3,
      leaf: false,
      name: "Linh kiện loại c",
      children: [{
        id: 1,
        leaf: true,
        name: "Linh kiện a",
        children: [],
      },
      {
        id: 2,
        leaf: true,
        name: "Linh kiện b",
        children: [],
      },
      {
        id: 3,
        leaf: true,
        name: "Linh kiện c",
        children: [],
      },],
    },
  ]

  type Category = {
    id: number;
    leaf: boolean;
    name: string;
    children: Category[]

  }
  const renderTab = (category: Category) => {
    if (category.children && category.children.length == 0) {
      return (
        <div
          key={category.id}
          className={cn(
            "border-primary rounded-full px-3 py-0.5",
            "text-default-800 text-sm hover:bg-primary-200 text-center",
            "transition-colors duration-300 ease-in-out cursor-pointer",
            false ? "border-2" : "border-0"
          )}
        >
          {category.name}
        </div>
      );
    } else {
      return (
        <AccordionItem key={category.id} title={category.name}>
          <div className={cn("flex flex-col")}>
            {/* Đảm bảo category.children tồn tại và là mảng */}
            {category.children && category.children.map((item) => (
              renderTab(item) // Gọi lại hàm renderTab cho mỗi mục trong children
            ))}
          </div>
        </AccordionItem>
      );
    }
  }

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className={cn("justify-center w-full")}>
        <Breadcrumbs radius="full" variant="solid">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="flex w-full gap-4">
        <div className="w-full min-w-[300px] max-w-[400px]">
          <Accordion variant="splitted" selectionMode="multiple" defaultExpandedKeys={["danhMuc", "fill"]}>
            <AccordionItem key={"danhMuc"} title={"Danh mục"}>
              <div
                key={1}
                className={cn(
                  "border-primary rounded-full px-3 py-0.5",
                  "text-default-800 text-sm hover:bg-primary-200 text-center",
                  "transition-colors duration-300 ease-in-out cursor-pointer",
                  false ? "border-2" : "border-0"
                )}
              > 
              Linh kiện loiaj a
              </div>
            </AccordionItem>
            <AccordionItem key={"fill"} title={"Lọc sản phẩm"}>

            </AccordionItem>
          </Accordion>

        </div>
        <div>
          {children}
        </div>
      </div>
    </section >
  );
}
