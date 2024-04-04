import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

import Image from "next/image";
import Icons from "@/app/Icons";

interface Data {
  id: number;
  requestDate: string;
  type: string;
  status: string;
  tavelAgent: string;
  groupSize: string;
  destinations: string;
  theme: string;
  tripDates: string;
  budget: string;
}

function createData(
  id: number,
  requestDate: string,
  type: string,
  status: string,
  tavelAgent: string,
  groupSize: string,
  destinations: string,
  theme: string,
  tripDates: string,
  budget: string
): Data {
  return {
    id,
    requestDate,
    type,
    status,
    tavelAgent,
    groupSize,
    destinations,
    theme,
    tripDates,
    budget,
  };
}

const tempRows = [
  createData(
    1,
    "01-01-2021",
    "Detailed",
    "New",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    2,
    "01-01-2021",
    "Detailed",
    "Open",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    3,
    "01-01-2021",
    "Detailed",
    "Building",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    4,
    "01-01-2021",
    "Short Form",
    "Confirmed",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    5,
    "01-01-2021",
    "Detailed",
    "In Progress",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    6,
    "01-01-2021",
    "Detailed",
    "Completed",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    7,
    "01-01-2021",
    "Detailed",
    "Cancelled",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
  createData(
    8,
    "01-01-2021",
    "Detailed",
    "New",
    "Travel Agent",
    "10",
    "Paris, London, Rome",
    "Adventure",
    "01-01-2024 , 01-02-2024",
    "$5000"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "requestDate",
    numeric: false,
    disablePadding: true,
    label: "Request Date",
  },
  {
    id: "type",
    numeric: false,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "tavelAgent",
    numeric: false,
    disablePadding: false,
    label: "Travel Agent",
  },
  {
    id: "groupSize",
    numeric: false,
    disablePadding: false,
    label: "Group Size",
  },
  {
    id: "destinations",
    numeric: false,
    disablePadding: false,
    label: "Destinations",
  },
  {
    id: "theme",
    numeric: false,
    disablePadding: false,
    label: "Theme",
  },
  {
    id: "tripDates",
    numeric: false,
    disablePadding: false,
    label: "Trip Dates",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
  },
  {
    id: "actions" as keyof Data,
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className="bg-grey">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            className={index == headCells.length - 1 ? "" : "border-right"}
            key={headCell.id + index}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <div className="poppins-medium">{headCell.label}</div>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      className="bg-grey"
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {""}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function DMCMyTripsTable(props: { content: Data[] }) {
  const { content } = props;
  const rows = content || tempRows;

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("requestDate");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const getBgColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-new";
      case "Open":
        return "bg-open";
      case "Building":
        return "bg-building";
      case "Confirmed":
        return "bg-confirmed";
      case "In Progress":
        return "bg-progress";
      case "Completed":
        return "bg-completed";
      case "Cancelled":
        return "bg-cancelled";
      default:
        return "bg-grey";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.requestDate}
                    </TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">
                      <div
                        className={
                          getBgColor(row.status) +
                          " px-1 py-1 rounded-full text-center text-white poppins-medium"
                        }
                      >
                        {row.status}
                      </div>
                    </TableCell>
                    <TableCell align="left">{row.tavelAgent}</TableCell>
                    <TableCell align="left">{row.groupSize}</TableCell>
                    <TableCell align="left">{row.destinations}</TableCell>
                    <TableCell align="left">{row.theme}</TableCell>
                    <TableCell align="left">{row.tripDates}</TableCell>
                    <TableCell align="left">{row.budget}</TableCell>

                    {/* ACTIONS */}
                    <TableCell align="left">
                      <div className="flex">
                        <div className="px-1">
                          <Tooltip title="View" placement="top">
                            <Image
                              src={Icons.eyeIconDark}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Proposals" placement="top">
                            <Image
                              src={Icons.paperPlaneIconGold}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Message" placement="top">
                            <Image
                              src={Icons.messageGreyIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Itinerary Builder" placement="top">
                            <Image
                              src={Icons.burgerGreyIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="History" placement="top">
                            <Image
                              src={Icons.reportGreyIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Vouchers" placement="top">
                            <Image
                              style={{ transform: "rotate(45deg)" }}
                              src={Icons.tagDarkIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Delete" placement="top">
                            <Image
                              src={Icons.stopCircleDarkIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Confirm Trip" placement="top">
                            <Image
                              src={Icons.checkGreyIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                        <div className="px-1">
                          <Tooltip title="Delete" placement="top">
                            <Image
                              src={Icons.closeDarkIcon}
                              alt="edit"
                              onClick={() => {
                                alert("edit " + row.id);
                              }}
                            />
                          </Tooltip>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
