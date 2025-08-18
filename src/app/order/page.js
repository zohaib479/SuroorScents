import React, { Suspense } from "react";
import OrderComponent from "./OrderComponent";
// import { useSearchParams } from "next/navigation";
import Image from "next/image";
export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading order...</div>}>
      <OrderComponent />
    </Suspense>
  );
}
