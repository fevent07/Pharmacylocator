import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./style.css";
import Navbar from "../../components/PharmaNavbar";
import Sidebar from "../../components/pharma/Sidebar/sidebar";
import axios from "axios";

export const ManageMedicine = () => {
  const [columns] = useState([
    {
      title: "Medicine ID",
      field: "medicine_id",
      validate: (rowData) =>
        rowData.medicine_id === "" ? "Name cannot be empty" : "",
      cellStyle: {
        backgroundColor: "#039be5",
        color: "#FFF",
      },
      headerStyle: {
        backgroundColor: "#039be5",
      },
    },

    {
      title: "Medicine Name",
      field: "medName",
      validate: (rowData) =>
        rowData.medicine_name === "" ? "Name cannot be empty" : "",
    },
    {
      title: "Medicine Manufacure Date",
      field: "manufactureDate",
      type: "numeric",
      validate: (rowData) =>
        rowData.medicine_manufactureDate < 1900
          ? "medicine_expireDate must be after 1900"
          : "",
    },
    {
      title: "Medicine Expire Date",
      field: "expirationDate",
      type: "numeric",
      validate: (rowData) =>
        rowData.medicine_expireDate < 1900
          ? "medicine_expireDate must be after 1900"
          : "",
    },
    {
      title: "Medicine Categories",
      field: "medType",
    },
    {
      title: "Medicine Price",
      field: "medPrice",
    },
  ]);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/meds")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  const [medId, setMedId] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/meds")
      .then((res) => res._id)
      .then((res) => {
        console.log(res._id);
        setMedId(res._id);
      });
  }, []);

  return (
    <div className="ManageTable">
      <Navbar />
      <div className="home1">
        <div className="side">
          {" "}
          <Sidebar />
        </div>
        <div className="home">
          <MaterialTable
            style={{ display: "flex!important", flexDirection: "column" }}
            title={<h1>Medicine Store table</h1>}
            columns={columns}
            data={data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  axios
                    .post("http://localhost:4000/meds/add", newData)
                    .then((res) => console.log(res));
                  setTimeout(() => {
                    setData([...data, newData]);

                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  console.log(medId);
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                  }, 1000);
                }),
            }}
            options={{
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
              },
              sorting: true,
              search: true,
              searchFieldAlignment: "right",
              searchAoutoFocus: true,
              searchFieldvarient: "standard",
              filtering: true,
              paging: true,
              pageSizeoptions: [3, 7, 10],
              pageSize: 5,
              paginationType: "stopped",
              showfirstLastPageButtons: false,
              exportButton: true,
              exportFileName: "Medicine Store",
              exportAllData: true,
              addRowPosition: "first",
              actionColumnIndex: "end",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageMedicine;
