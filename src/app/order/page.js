import React, { Suspense } from "react";
import OrderComponent from "./OrderComponent";

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading order...</div>}>
      <OrderComponent />
    </Suspense>
  );
}
