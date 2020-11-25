import React from 'react';
import './dashboard-page.scss'
import Card from "../../widgets/cards/cards.js"
export default function Dashboard() {
    return (
        <>
            <div className="dashboard-container">
                <aside className="side-nav">
                    <div className="Layout-aside-inner">

                    </div>
                </aside>
                <div className="main-body">
                    <div className="top-bar">
                    <i className="las la-bars la-2x"></i>
                    <span>Notifications</span>
                    </div>
                    <div className="page-title">
                    <span className="dash-title">Dashboard</span>
                    </div>
                    <div className="card-container">
                        <div className="stat-card">
                            <Card title="Total Users" value="200,000" icon="las la-user-friends la-3x"/>
                        </div>
                        <div className="stat-card">
                        <Card title="Registrations" value="50" icon="las la-edit la-3x"/>
                        </div>
                        <div className="stat-card">
                        <Card title="Transactions Today" value="KES 700,000" icon="las la-money-bill-wave la-3x"/>
                        </div>
                        <div className="stat-card">
                        <Card title="Revenue" value="KES 1,308,499" icon="las la-chart-pie la-3x"/>
                        </div>
                    </div>
                    <div className="analysis-container">
                        <div className="revenue-chart"></div>
                        <div className="user-chart"></div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}