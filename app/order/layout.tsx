"use client"

import RowSteps from "@/components/uilt/rowSteps";
import { usePathname } from "next/navigation";

export default function OrderLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    
    const pathname = usePathname();
    const sectionPath = pathname?.split('/')[2];
    const sectionIndex = ["cart", "checkOut", "pay"];
    let currentStep = sectionIndex.indexOf(sectionPath);
    console.log("parth", sectionPath)

    const steps = [
        {
            title: "Giỏ hàng",
        },
        {
            title: "Đặt hàng",
        },
        {
            title: "Thanh toán",
        },
    ]
    
    return (
        <div className="flex flex-col items-center mt-5 mb-4">
             <RowSteps
                currentStep={currentStep}
                steps={steps}
                className="w-full"
                color="secondary"
            />
            {children}
        </div>


    );
}
