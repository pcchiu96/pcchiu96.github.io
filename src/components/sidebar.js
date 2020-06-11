import React from "react";
import "./sidebar.css";

export default function Sidebar({ show }) {
    let sidebarClass = "sidebar";
    if (show) sidebarClass += " show-sidebar";

    return (
        <div className={sidebarClass}>
            <a href=''>Skills</a>
            <a href=''>Education</a>
        </div>
    );
}