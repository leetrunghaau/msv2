"use client"


import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Input } from "@heroui/input";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs className="my-4">
        <BreadcrumbItem href="/">Math solver VN</BreadcrumbItem>
        <BreadcrumbItem href="#">Sản phẩm</BreadcrumbItem>
        <BreadcrumbItem href="#">Kit Wifi</BreadcrumbItem>
        <BreadcrumbItem href="#">Esp</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex">
        <div>
          <h1>#hagtag</h1>
          <div>khinh nghiệm hay</div>
          <div>hướng dẫn sản phẩm</div>
          <div>tài liệu hướng dẫn</div>
          <div>tin tức công nghệ</div>
          <div>dự án hay</div>
        </div>
        <div className="flex flex-col">
          <Input type="text" />

        </div>

      </div>
    </div>
  );
}
