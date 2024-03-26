import * as React from "react";
import {
  DataGridPro,
  GridColDef,
  GridRowId,
  GridRowModel,
  GridRowOrderChangeParams,
} from "@mui/x-data-grid-pro";

import Icons from "@/app/Icons";
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

export default function DragTableRequestItineraries(props: any) {
  const { itineraries, days, setDays, dayIndex } = props;
  // Define your own data with id, name, and description columns
  const tempColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params: any) => {
        console.log("PARAMS : ", params);
        return (
          <div className="">
            <Image
              className="rounded-lg"
              src={params.row.image}
              alt="image"
              width={200}
              height={200}
              style={{ height: "40px", width: "40px" }}
            />
          </div>
        );
      },
    },

    { field: "name", headerName: "Name", width: 150 },
    { field: "theme", headerName: "Theme", width: 150 },
    { field: "destination", headerName: "Destination", width: 150 },
    { field: "season", headerName: "Season", width: 130 },
    { field: "validity", headerName: "Validity Date", width: 100 },
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
              <Image
                src={Icons.editIconDark}
                alt="action"
                width={20}
                height={20}
              />
            </div>
            <div
              className="pointer"
              onClick={(e) => handleDeleteService(e, params.id)}
            >
              <Image
                src={Icons.deleteRedIcon}
                alt="action"
                width={20}
                height={20}
              />
            </div>
          </div>
        );
      },
    },
  ];

  const [rows, setRows] = React.useState(itineraries);
  const [columns] = React.useState(tempColumns);

  React.useEffect(() => {
    setRows(itineraries);
  }, [itineraries]);

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
    <div style={{ width: "100%" }} className="bg-white">
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
