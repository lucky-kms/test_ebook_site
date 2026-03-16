import React, { useCallback, useState } from "react";
import Gnb from "../components/layout/Gnb";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

import { menus } from "../datas/menuData";

export default function AppLayout() {
    const [activeTarget, setActiveTarget] = useState("best_book");

    const scrollToSection = useCallback((scrollTarget) => {
        const element = document.getElementById(scrollTarget);
        
        if(!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setActiveTarget(scrollTarget);
    }, []);

    return (
        <div className="appLayout">
            <Gnb 
                menus={menus}
                activeTarget={activeTarget}
                scrollToSection={scrollToSection}
            />

            <main className="content" >
                <Outlet 
                    context={{ activeTarget, setActiveTarget, scrollToSection }}
                />
            </main>

            <Footer />
        </div>
    )
}


