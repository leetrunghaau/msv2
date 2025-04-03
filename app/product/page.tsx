"use client";

import ProductListItem from "@/components/product/productItem";
import products, { categoryList } from "@/data/product";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { Pagination } from "@heroui/pagination";
import { Slider } from "@heroui/slider";
import { Icon } from "@iconify/react";


const renderCategory = (categories: any[]) => {
    return (
        <Accordion>
            {categoryList.map((category) => (
                <AccordionItem key={category.id} aria-label={category.name} title={category.name} >
                    <div className="flex flex-col gap-2 py-0  ml-4">
                        {category.children.map((subCategory) => (
                            <Accordion>
                                <AccordionItem key={subCategory.id} aria-label={subCategory.name} title={subCategory.name} >
                                    <div className="flex flex-col gap-2 py-0 ml-4">
                                        {subCategory.children.map((child) => (
                                            <Checkbox key={child.id} size="sm">
                                                {child.name}
                                            </Checkbox>
                                        ))}
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};


export default function ProductPage() {
    return (
        <div>
            <Breadcrumbs className="my-4">
                <BreadcrumbItem href="/">Math solver VN</BreadcrumbItem>
                <BreadcrumbItem href="#">Sản phẩm</BreadcrumbItem>
                <BreadcrumbItem href="#">Kit Wifi</BreadcrumbItem>
                <BreadcrumbItem href="#">Esp</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex justify-around gap-4 ">
                <div className="flex flex-col gap-4 min-w-60" >
                    <h1 className="text-xl text-center font-semibold text-secondary-700">Bộ lọc</h1>
                    <Divider />
                    <Slider
                        classNames={{
                            base: "max-w-md",
                            filler: "bg-gradient-to-r from-secondary-500 to-secondary-400",
                            labelWrapper: "mb-2",
                            label: "font-medium text-default-700 text-medium",
                            value: "font-medium text-default-500 text-small",
                            thumb: [
                                "transition-size",
                                "bg-gradient-to-r from-secondary-400 to-secondary-500",
                                "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                                "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                            ],
                            step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
                        }}
                        defaultValue={[0, 10000000]}
                        disableThumbScale={true}
                        formatOptions={{ style: "currency", currency: "VND" }}
                        label="Khoảng giá"
                        maxValue={10000000}
                        minValue={0}
                        showOutline={true}
                        showSteps={true}
                        showTooltip={true}
                        step={100000}
                        tooltipProps={{
                            offset: 10,
                            placement: "bottom",
                            classNames: {
                                base: [
                                    "before:bg-gradient-to-r before:from-secondary-400 before:to-secondary-500",
                                ],
                                content: [
                                    "py-2 shadow-xl",
                                    "text-white bg-gradient-to-r from-secondary-400 to-secondary-500",
                                ],
                            },
                        }}
                        tooltipValueFormatOptions={{ style: "currency", currency: "VND", maximumFractionDigits: 0 }}
                    />
                    <Divider />
                    <Accordion>
                        <AccordionItem key="1" aria-label="dòng điện" title="Dòng điện">
                            <div className="flex flex-col gap-2 mb-2 ml-4">
                                <Checkbox size="sm">Option 1</Checkbox>
                                <Checkbox size="sm">Option 2</Checkbox>
                                <Checkbox size="sm">Option 3</Checkbox>
                                <Checkbox size="sm">Option 4</Checkbox>
                                <Checkbox size="sm">Option 5</Checkbox>
                                <Checkbox size="sm">Option 6</Checkbox>
                                <Checkbox size="sm">Option 7</Checkbox>
                                <Checkbox size="sm">Option 8</Checkbox>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Công suất" title="Công xuất">
                            <div className="flex flex-col gap-2 mb-2 ml-4">
                                <Checkbox size="sm">Option 1</Checkbox>
                                <Checkbox size="sm">Option 2</Checkbox>
                                <Checkbox size="sm">Option 3</Checkbox>
                                <Checkbox size="sm">Option 4</Checkbox>
                                <Checkbox size="sm">Option 5</Checkbox>
                                <Checkbox size="sm">Option 6</Checkbox>
                                <Checkbox size="sm">Option 7</Checkbox>
                                <Checkbox size="sm">Option 8</Checkbox>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="điện dung" title="Diện dung">
                            <div className="flex flex-col gap-2 mb-2 ml-4">
                                <Checkbox size="sm">Option 1</Checkbox>
                                <Checkbox size="sm">Option 2</Checkbox>
                                <Checkbox size="sm">Option 3</Checkbox>
                                <Checkbox size="sm">Option 4</Checkbox>
                                <Checkbox size="sm">Option 5</Checkbox>
                                <Checkbox size="sm">Option 6</Checkbox>
                                <Checkbox size="sm">Option 7</Checkbox>
                                <Checkbox size="sm">Option 8</Checkbox>
                            </div>
                        </AccordionItem>
                    </Accordion>
                    {/* <Divider /> */}
                    <Button
                        size="lg"
                        color="secondary"
                        variant="bordered"
                        endContent={<Icon icon="tabler:zoom-check" width={20} />}
                    >Áp dụng</Button>
                    <h1 className="text-xl text-center font-semibold text-secondary-700 mt-10">Danh mục</h1>
                    {renderCategory(categoryList)}
                </div>
                <div className="flex flex-col gap-4 w-full max-w-full items-center">
                    <div className="flex flex-wrap gap-2 w-full max-w-full px-4 justify-center content-start">
                        {products.map((product) => (
                            <ProductListItem key={product.id} {...product} className="snap-start" />
                        ))}
                    </div>
                    <Pagination
                        color="secondary"
                        showShadow
                        initialPage={1}
                        total={20}
                        siblings={2}
                        variant="light"
                    />
                </div>
            </div>
        </div>


    )
}
