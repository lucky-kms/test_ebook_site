import Tabs from "@/components/tabs";
import { productTabConfig } from "./productTabConfig";

export default function ProductTabs({ activeKey, onChange }) {
    return (
        <Tabs
            items = {productTabConfig}
            activeKey={activeKey}
            onChange={onChange}
        />
    )
}