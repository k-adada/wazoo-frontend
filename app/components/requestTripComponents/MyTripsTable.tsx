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

import deleteRedIcon from "../../assets/delete_red.svg";
import editIcon from "../../assets/Icon_Edit.png";
import tourEffelImage from "../../assets/tour_effel.jpg";

import alpsImage from "../../assets/images/services/alps.webp";
import bernImage from "../../assets/images/services/bern.jpg";
import eifelImage from "../../assets/images/services/EiffelTower.jpg";
import brandenImage from "../../assets/images/services/BrandenbergGate.webp";
import garnierImage from "../../assets/images/services/Garnier.webp";
import genevaImage from "../../assets/images/services/Geneva.webp";

import Image from "next/image";
import Icons from "@/app/Icons";

interface Data {
  id: number;
  requestDate: string;
  status: string;
  clientName: string;
  requestType: string;
  groupSize: string;
  tripDate: string;
  destinations: string;
  budget: string;
  totalProposals: string;
}

function createData(
  id: number,
  requestDate: string,
  status: string,
  clientName: string,
  requestType: string,
  groupSize: string,
  tripDate: string,
  destinations: string,
  budget: string,
  totalProposals: string
): Data {
  return {
    id,
    requestDate,
    status,
    clientName,
    requestType,
    groupSize,
    tripDate,
    destinations,
    budget,
    totalProposals,
  };
}

const rows = [
  createData(
    1,
    "28/03/24",
    "New",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    2,
    "28/03/24",
    "Open",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    3,
    "28/03/24",
    "Building",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    4,
    "28/03/24",
    "Confirmed",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    5,
    "28/03/24",
    "In Progress",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    6,
    "28/03/24",
    "Completed",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    7,
    "28/03/24",
    "Cancelled",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    8,
    "28/03/24",
    "New",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
  ),
  createData(
    9,
    "28/03/24",
    "New",
    "John Doe",
    "Tailored",
    "10",
    "May 1 - May 10",
    "Paris, France",
    "$5000",
    "5"
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
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "clientName",
    numeric: false,
    disablePadding: false,
    label: "Client Name",
  },
  {
    id: "requestType",
    numeric: false,
    disablePadding: false,
    label: "Request Type",
  },
  {
    id: "groupSize",
    numeric: false,
    disablePadding: false,
    label: "Group Size",
  },
  {
    id: "tripDate",
    numeric: false,
    disablePadding: false,
    label: "Trip Date",
  },
  {
    id: "destinations",
    numeric: false,
    disablePadding: false,
    label: "Destinations",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
  },
  {
    id: "totalProposals",
    numeric: false,
    disablePadding: false,
    label: "Total Proposals",
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
export default function MyTripsTable() {
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
                    <TableCell align="left">{row.clientName}</TableCell>
                    <TableCell align="left">{row.requestType}</TableCell>
                    <TableCell align="left">{row.groupSize}</TableCell>
                    <TableCell align="left">{row.tripDate}</TableCell>
                    <TableCell align="left">{row.destinations}</TableCell>
                    <TableCell align="left">{row.budget}</TableCell>
                    <TableCell align="left">{row.totalProposals}</TableCell>
                    <TableCell align="left">
                      <div className="flex">
                        <div className="px-1">
                          <Image
                            src={Icons.planTripIconDark}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.taActionButtonGrey}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.messageGreyIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.burgerGreyIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.reportGreyIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            style={{ transform: "rotate(45deg)" }}
                            src={Icons.tagDarkIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.stopCircleDarkIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.checkGreyIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
                        </div>
                        <div className="px-1">
                          <Image
                            src={Icons.closeDarkIcon}
                            alt="edit"
                            onClick={() => {
                              alert("edit " + row.id);
                            }}
                          />
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
