import { useState } from "react";
import ProductTabs from "@/features/product/ProductTabs";
import ProductTabContent from "@/features/product/ProductTabContent";

export default function Productpage() {
    const [activeTab, setActiveTab] = useState("detail");

    return (
        <div>

            <ProductTabs
                activeKey={activeTab}
                onChange={(nextKey) => setActiveTab(nextKey)}
            />

            <ProductTabContent activeKey={activeTab} />
        </div>
    )
}