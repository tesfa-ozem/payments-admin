import React from 'react';
import './dashboard-page.scss'
import Card from "../../widgets/cards/cards.js"
import { data } from './data.js';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
export default function Dashboard() {
    const pageSettings = { pageSize: 6 }
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
                            <Card title="Total Users" value="200,000" icon="las la-user-friends la-3x" />
                        </div>
                        <div className="stat-card">
                            <Card title="Registrations" value="50" icon="las la-edit la-3x" />
                        </div>
                        <div className="stat-card">
                            <Card title="Transactions Today" value="KES 700,000" icon="las la-money-bill-wave la-3x" />
                        </div>
                        <div className="stat-card">
                            <Card title="Revenue" value="KES 1,308,499" icon="las la-chart-pie la-3x" />
                        </div>
                    </div>
                    <div className="analysis-container">
                        <div className="revenue-chart">
                            <GridComponent dataSource={data} allowPaging={true} pageSettings={ pageSettings }>
                                <ColumnsDirective>
                                    <ColumnDirective field='OrderID' width='100' textAlign="Right" />
                                    <ColumnDirective field='CustomerID' width='100' />
                                    <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
                                    <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
                                    <ColumnDirective field='ShipCountry' width='100' />
                                </ColumnsDirective>
                                <Inject services={[Page, Sort, Filter, Group]} />
                            </GridComponent>
                        </div>
                        <div className="user-chart"></div>
                    </div>

                </div>
            </div>
        </>
    )
}