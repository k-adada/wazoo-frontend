export const servicesData = {
  columns: [
    {
      field: "id",
      hide: true,
      generateData: "TESSST",
      headerName: "Id",
    },
    {
      field: "name",
      headerName: "Name",
      width: "200px",
      generateData: "TESSST",
    },
    {
      field: "description",
      headerName: "Description",
      width: "200px",
      generateData: "TESSST",
    },
    {
      field: "status",
      headerName: "Status",
      width: "200px",
      generateData: "TESSST",
    },
    {
      field: "type",
      headerName: "Type",
      width: "200px",
      generateData: "TESSST",
    },
    {
      field: "created",
      headerName: "Created",
      width: "200px",
      generateData: "TESSST",
    },
    {
      field: "updated",
      headerName: "Updated",
      width: "200px",
      generateData: "TESSST",
    },
  ],
  rows: [
    {
      id: "1",
      name: "Service 1",
      description: "Service 1 Description",
      status: "Active",
      type: "Type 1",
      created: "2018-01-01",
      updated: "2018-01-01",
    },
    {
      id: "2",
      name: "Service 2",
      description: "Service 2 Description",
      status: "Inactive",
      type: "Type 2",
      created: "2018-01-01",
      updated: "2018-01-01",
    },
    // Add more rows as needed
  ],
  initialState: {
    columns: {
      columnVisibilityModel: {
        id: true,
        name: true,
        description: true,
        status: true,
        type: true,
        created: true,
        updated: true,
      },
    },
  },
};
