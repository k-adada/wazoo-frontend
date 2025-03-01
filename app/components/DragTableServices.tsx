import * as React from "react";
import {
  DataGridPro,
  GridColDef,
  GridRowId,
  GridRowModel,
  GridRowOrderChangeParams,
} from "@mui/x-data-grid-pro";

import deleteRedIcon from "../assets/delete_red.svg";
import editIcon from "../assets/Icon_Edit.png";
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

export default function RowOrderingGrid(props: any) {
  const { services, days, setDays, dayIndex } = props;
  // Define your own data with id, name, and description columns
  const tempColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "serviceType", headerName: "Service Type", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "method", headerName: "Method", width: 130 },
    { field: "duration", headerName: "Duration", width: 100 },
    { field: "timeslot", headerName: "Timeslot", width: 100 },
    { field: "price", headerName: "Price ($)", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        // Example dynamic image selection (adjust according to your needs)

        const handleDeleteService = (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>,
          serviceId: GridRowId
        ) => {
          event.stopPropagation(); // Prevent triggering row selection or other grid actions

          // Update the services for the targeted day directly within the days state
          let updatedDays = [...days];
          updatedDays[dayIndex].services = updatedDays[
            dayIndex
          ].services.filter((service: { id: any }) => service.id !== serviceId);

          // Update the days state
          setDays(updatedDays);

          //ensure the rows for the DataGridPro are updated to reflect this change
          setRows(updatedDays[dayIndex].services); // This assumes your component re-receives the updated services as props
        };

        return (
          <div className="flex items-center justify-center">
            <div
              className="pointer pr-3"
              onClick={(e) => console.log("EDIT : ", params.id)}
            >
              <Image src={editIcon} alt="action" width={20} height={20} />
            </div>
            <div
              className="pointer"
              onClick={(e) => handleDeleteService(e, params.id)}
            >
              <Image src={deleteRedIcon} alt="action" width={20} height={20} />
            </div>
          </div>
        );
      },
    },
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
  ];

  const [rows, setRows] = React.useState(services);
  const [columns] = React.useState(tempColumns);

  React.useEffect(() => {
    setRows(services);
  }, [services]);

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
    <div style={{  width: "100%" }} className="bg-white">
    <DataGridPro
      rows={rows}
      columns={columns}
      loading={loading}
      rowReordering
      onRowOrderChange={handleRowOrderChange}
      autoHeight
    />
  </div>
  );
}
