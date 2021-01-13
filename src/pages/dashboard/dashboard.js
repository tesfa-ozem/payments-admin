import React, { useState, useEffect } from 'react';
import './dashboard-page.scss'
import Card from "../../widgets/cards/cards.js"
import TransactionTable from "../../widgets/transaction-table/transaction-table.js";
import axios from 'axios'
import { useQuery, gql } from '@apollo/client';

export default function Dashboard() {
    const pageSettings = { pageSize: 8 }
    const ToolbarItems = ['Search'];
    const [transctions, setTransactions] = useState()
    const [txToday, setTransactionsToday] = useState()
    const [revenue, setRevenue] = useState()
    const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

    const getRevenune = (arry) => {
        let sum = arry.reduce((acc, val) => {

            return acc + parseFloat(val.trasnction_amount);

        }, 0);
        return sum;
    }
    const transactionsToday = (tx) => {
        let sumtransactionToday = tx.filter(val => {
            let date = new Date(val.transaction_time);
            return isToday(date)
        })

        return sumtransactionToday.reduce((acc, val) => {
            return acc + parseFloat(val.trasnction_amount)
        }, 0);
    }
    const isToday = (someDate) => {
        const today = new Date()
        return someDate.getDate() == today.getDate() &&
            someDate.getMonth() == today.getMonth() &&
            someDate.getFullYear() == today.getFullYear()
    }
    useEffect(() => {

        axios.get(`https://api-sacco.tritel.co.ke/api/dashboard/getTransactions`)
            .then(res => {
                setTransactions(res.data.data);
                const competed = res.data.data.filter(val => {
                    return val.trasnction_amount !== null;
                });
                setRevenue(getRevenune(competed))
                setTransactionsToday(transactionsToday(competed))
                console.log(res.data.data[0])
                // console.log(getRevenune(competed))
            }).catch(err => {
                console.log(err)
            })

    }, [])
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
                            <Card title="Transactions Today" value={'KES' + ' ' + txToday} icon="las la-money-bill-wave la-3x" />
                        </div>
                        <div className="stat-card">
                            <Card title="Revenue" value={'KES' + ' ' + revenue} icon="las la-chart-pie la-3x" />
                        </div>
                    </div>
                    <div className="analysis-container">
                        <div className="revenue-chart">
                            <TransactionTable categoryData={transctions} />
                            {/* <GridComponent dataSource={transctions} allowPaging={true} pageSettings={pageSettings}>
                                <ColumnsDirective>
                                    <ColumnDirective field='transaction_id' headerText='Transaction Id' width='100' textAlign="Center" />
                                    <ColumnDirective field='trasnction_amount' headerText='Amount' width='50' textAlign="Center" />
                                    <ColumnDirective field='msisdn' width='100' headerText='Phone' textAlign="Center" />
                                    <ColumnDirective field='transaction_time' headerText='Time' width='100' format="C2" textAlign="Center" />

                                </ColumnsDirective>
                                <Inject services={[Page, Sort, Filter, Group,search]} />
                            </GridComponent> */}
                        </div>
                        {/* <div className="user-chart"></div> */}
                    </div>
                    <footer style={{ height: 'auto', backgroundColor: '#F7C201' }}>
                        <h1>
                            Made with at DigitalOcean
                        </h1>
                    </footer>
                </div>
            </div>
        </>
    )
}