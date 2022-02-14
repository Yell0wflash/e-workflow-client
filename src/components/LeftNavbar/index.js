import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AiOutlineDashboard, AiOutlineWarning } from 'react-icons/ai'
import { RiErrorWarningLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { IoIosStats } from 'react-icons/io'
import { TiZoomOutline } from 'react-icons/ti'


function LeftNavbar({ active }) {
    return (
        <div className="left-navbar-container">
            <div className="head">
                <h3>Logo</h3>
            </div>
            <br />
            <div className="list-cont">
                <Link to="/officer/dashboard/sdcc" className={active === "dashboard" ? "link active" : "link"}>
                    <AiOutlineDashboard className="icon" />
                    Dashboard
                </Link>
                <Link to="/officer/cases" className={active === "cases" ? "link active" : "link"}>
                    <RiErrorWarningLine className="icon" />
                    Cases
                </Link>
                <Link to="/officer/users" className={active === "users" ? "link active" : "link"}>
                    <FiUsers className="icon" />
                    Users
                </Link>
                <Link to="/officer/predict" className={active === "predict" ? "link active" : "link"}>
                    <IoIosStats className="icon" />
                    Predict
                </Link>
                <Link to="/officer/suspects" className={active === "suspects" ? "link active" : "link"}>
                    <AiOutlineWarning className="icon" />
                    View Suspects
                </Link>
                <Link to="/officer/evidence" className={active === "evidence" ? "link active" : "link"}>
                    <TiZoomOutline className="icon" />
                    Evidence
                </Link>
                <Link to="/officer/addEvidence" className={active === "addEvidence" ? "link active" : "link"}>
                    <RiErrorWarningLine className="icon" />
                    Add Evidence
                </Link>
            </div>
        </div>
    );
}

export default LeftNavbar;