import React from "react";
import Gnb from "../components/layout/Gnb";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

import { menus } from "../datas/menuData";

export default function AppLayout() {
    return (
        <div className="appLayout">
            <Gnb menus={menus} />

            <main className="content">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}


