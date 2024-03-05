import * as React from "react";
import {
  DataGridPro,
  GridColDef,
  GridRowModel,
  GridRowOrderChangeParams,
} from "@mui/x-data-grid-pro";

import customDragIcon from "../assets/Icon_move.png";
import Image from "next/image";

function updateRowPosition(
  initialIndex: number,
  newIndex: number,
  rows: Array<GridRowModel>
): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rowsClone = [...rows];
      const row = rowsClone.splice(initialIndex, 1)[0];
      rowsClone.splice(newIndex, 0, row);
      resolve(rowsClone);
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function RowOrderingGrid() {
  // Define your own data with id, name, and description columns
  const tempColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "serviceType", headerName: "Service Type", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "method", headerName: "Method", width: 130 },
    { field: "duration", headerName: "Duration", width: 100 },
    { field: "timeslot", headerName: "Timeslot", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
  ];

  const tempRows: GridRowModel[] = [
    {
      id: "1",
      serviceType: "Service 1",
      description: "Service 1 Description",
      location: "Location 1",
      method: "Method 1",
      duration: "Duration 1",
      timeslot: "Timeslot 1",
      price: "Price 1",
    },
    {
      id: "2",
      serviceType: "Service 2",
      description: "Service 2 Description",
      location: "Location 2",
      method: "Method 2",
      duration: "Duration 2",
      timeslot: "Timeslot 2",
      price: "Price 2",
    },
    {
      id: "3",
      serviceType: "Service 3",
      description: "Service 3 Description",
      location: "Location 3",
      method: "Method 3",
      duration: "Duration 3",
      timeslot: "Timeslot 3",
      price: "Price 3",
    },
    {
      id: "4",
      serviceType: "Service 4",
      description: "Service 4 Description",
      location: "Location 4",
      method: "Method 4",
      duration: "Duration 4",
      timeslot: "Timeslot 4",
      price: "Price 4",
    },
    // Add more rows as needed
  ];

  const [rows, setRows] = React.useState(tempRows);
  const [columns] = React.useState(tempColumns);

  const [loading, setLoading] = React.useState(false);

  const handleRowOrderChange = async (params: GridRowOrderChangeParams) => {
    setLoading(true);
    const newRows = await updateRowPosition(
      params.oldIndex,
      params.targetIndex,
      rows
    );
    setRows(newRows);
    setLoading(false);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        loading={loading}
        rowReordering
        onRowOrderChange={handleRowOrderChange}
      />
    </div>
  );
}
