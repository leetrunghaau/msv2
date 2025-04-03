import { useCallback, useState } from "react";

export const formatPrice = (price: number) => {
    return price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
}
export const connectAddress = (detail: string) => {
    return detail
}