import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Inject, Sort, } from '@syncfusion/ej2-react-grids';

export default class TransactionTable extends React.Component  {
    constructor() {
        super()
        this.toolbarOptions = ['Search'];
        // this.sortingOptions = { columns: [{ field: 'transaction_id', direction: 'Ascending' }] };
    }
    
    render() {
        let dateObject = {type:'date', format:'dd/MM/yyyy'};
        return (<div className='control-pane'>
            <div className='control-section row'>
                <GridComponent 
                dataSource={this.props.categoryData} 
                toolbar={this.toolbarOptions} 
                allowPaging={true} 
                pageSettings={{ pageSize: 7, pageCount: 5 }}
                // sortSettings={this.sortingOptions}
                allowSorting={true} >
                    <ColumnsDirective>
                        <ColumnDirective field='transaction_id' headerText='Transaction Id' width='100' textAlign="Center" />
                        <ColumnDirective field='trasnction_amount' headerText='Amount' width='50' textAlign="Center" />
                        <ColumnDirective field='first_name' headerText='Name' width='50' textAlign="Center" />
                        <ColumnDirective field='msisdn' width='100' headerText='Phone' textAlign="Center" />
                        <ColumnDirective field='transaction_time' headerText='Time' width='100'  textAlign="Center" />

                    </ColumnsDirective>
                    <Inject services={[Toolbar, Page, Sort]} />
                </GridComponent>
            </div>

        </div>);
    }
}
