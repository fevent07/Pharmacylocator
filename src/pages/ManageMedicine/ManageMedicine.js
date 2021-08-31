import React from 'react';
import MaterialTable from 'material-table';
import './style.css'
import Navbar from '../../components/PharmaNavbar';
import Sidebar from '../../components/pharma/Sidebar/sidebar';

export const ManageMedicine = () => {
  const { useState } = React;

  const [columns] = useState([
    {
      title: 'Medicine ID', field: 'medicine_id',
      validate: rowData => rowData.medicine_id === '' ? 'Name cannot be empty' : '',
      cellStyle: {
        backgroundColor: '#039be5',
        color: '#FFF'
      },
      headerStyle: {
        backgroundColor: '#039be5',
      }
    },

    {
      title: 'Medicine Name', field: 'medicine_name',
      validate: rowData => rowData.medicine_name === '' ? 'Name cannot be empty' : '',

    },
    {
      title: 'Medicine Manufacure Date', field: 'medicine_manufactureDate',
      type: 'numeric', validate: rowData => rowData.medicine_manufactureDate < 1900 ? 'medicine_expireDate must be after 1900' : '',
    },
    {
      title: 'Medicine Expire Date', field: 'medicine_expireDate',
      type: 'numeric', validate: rowData => rowData.medicine_expireDate < 1900 ? 'medicine_expireDate must be after 1900' : '',
    },
    {
      title: 'Medicine Categories', field: 'medicine_categories',

    },
    {
      title: 'Medicine Price', field: 'medicine_price',

    }
  ]);

  const [data, setData] = useState([
    { medicine_id: '1', medicine_name: 'Advil', medicine_manufactureDate: '12/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'for Adults', medicine_price: '100.00 Birr' },
    { medicine_id: '2', medicine_name: 'Paracitamol', medicine_manufactureDate: '12/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'For pregnant', medicine_price: '100.00 Birr' },
    { medicine_id: '3', medicine_name: 'Advil', medicine_manufactureDate: '1/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'Ratings', medicine_price: '100.00 Birr' },
    { medicine_id: '4', medicine_name: 'Paracitamol', medicine_manufactureDate: '2/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '5', medicine_name: 'Advil', medicine_manufactureDate: '3/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '6', medicine_name: 'Paracitamol', medicine_manufactureDate: '4/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '7', medicine_name: 'Advil', medicine_manufactureDate: '5/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '8', medicine_name: 'Paracitamol', medicine_manufactureDate: '6/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '9', medicine_name: 'Advil', medicine_manufactureDate: '7/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '10', medicine_name: 'Paracitamol', medicine_manufactureDate: '9/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '11', medicine_name: 'Advil', medicine_manufactureDate: '10/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '12', medicine_name: 'Paracitamol', medicine_manufactureDate: '11/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '13', medicine_name: 'Advil', medicine_manufactureDate: '12/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '14', medicine_name: 'Paracitamol', medicine_manufactureDate: '14/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '15', medicine_name: 'Advil', medicine_manufactureDate: '15/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '16', medicine_name: 'Paracitamol', medicine_manufactureDate: '16/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '17', medicine_name: 'Advil', medicine_manufactureDate: '17/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '18', medicine_name: 'Paracitamol', medicine_manufactureDate: '18/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '19', medicine_name: 'Advil', medicine_manufactureDate: '19/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },
    { medicine_id: '20', medicine_name: 'Paracitamol', medicine_manufactureDate: '20/3/2020', medicine_expireDate: '12/3/2022', medicine_categories: 'normalll', medicine_price: '100.00 Birr' },

  ]);

  return (
    <div className="ManageTable" >
      <Navbar />
      <div className="home1">
        <div className="side" > <Sidebar /></div>
        <div className="home">

          <MaterialTable
            style={{ display: 'flex!important', flexDirection: 'column' }}
            title={<h1>Medicine Store table</h1>}
            columns={columns}
            data={data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);

                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve()
                  }, 1000)
                }),
            }}
            options={{
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              sorting: true,
              search: true,
              searchFieldAlignment: "right",
              searchAoutoFocus: true,
              searchFieldvarient: "standard",
              filtering: true,
              paging: true,
              pageSizeoptions: [3, 7, 10,],
              pageSize: 5,
              paginationType: "stopped",
              showfirstLastPageButtons: false,
              exportButton: true,
              exportFileName: 'Medicine Store',
              exportAllData: true,
              addRowPosition: "first",
              actionColumnIndex: 'end',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ManageMedicine