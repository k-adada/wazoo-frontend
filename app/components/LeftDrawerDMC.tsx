import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// collapsables
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

// icons import
import dashboardIcon from "../assets/Icon_Home.png";
import servicesIcon from "../assets/Icon_My_Services.png";
import communityIcon from "../assets/Icon_Audience.png";
import requestsIcon from "../assets/Icon_Request.png";
import tripsIcon from "../assets/Icon_Plane.png";
import calendarIcon from "../assets/Icon_Calendar.png";
import financesIcon from "../assets/Icon_Finance.png";
import accountIcon from "../assets/Icon_My_Account.png";
import navIcon from "../assets/Icon_Nav_Menu.png";
import closeIcon from "../assets/Icon_Nav_Close.png";

import Image from "next/image";
import Link from "next/link";

export default function LeftDrawerDMC() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [openServices, setOpenServices] = React.useState(false);
  const [openCommunity, setOpenCommunity] = React.useState(false);
  const [openFinances, setOpenFinances] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);

  const handleCollapse = (collapsable: string) => {
    switch (collapsable) {
      case "services":
        setOpenServices(!openServices);
        break;
      case "community":
        setOpenCommunity(!openCommunity);
        break;
      case "finances":
        setOpenFinances(!openFinances);
        break;
      case "account":
        setOpenAccount(!openAccount);
        break;
      default:
        break;
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 280, bgcolor: "#132F3D", color: "#FDDFBB" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="absolute top-3 right-3 cursor-pointer">
        <Image src={closeIcon} alt="Close Icon" width={15} />
      </div>
      <Link href="/dmc-dashboard">
        <div className="f-32 text-gold py-[50px] text-center">
          Luxury Travel
        </div>
      </Link>
      <List>
        {/* Dashboard  */}
        <div className="py-2">
          <ListItem key={"Dashboard"} disablePadding>
            <Link href="/dmc-dashboard">
              <ListItemButton>
                <ListItemIcon>
                  <Image
                    src={dashboardIcon}
                    alt="Dashboard Icon"
                    width={24}
                    height={24}
                  />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </Link>
          </ListItem>
        </div>

        {/* My Services  */}
        <div className="py-2">
          <ListItem key={"My Services"} disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation();
                handleCollapse("services");
              }}
            >
              <ListItemIcon>
                <Image
                  src={servicesIcon}
                  alt="My Services Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary="My Services" />
              {openServices ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openServices} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/service-providers">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="&bull;&nbsp; Service Providers" />
                  {">"}
                </ListItemButton>
              </Link>

              <Link href="/services">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                  <ListItemText primary="&bull;&nbsp; Services" />
                  {">"}
                </ListItemButton>
              </Link>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Itineraries" />
                {">"}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Catalogues" />
                {">"}
              </ListItemButton>
            </List>
          </Collapse>
        </div>

        {/* Community  */}
        <div className="py-2">
          <ListItem key={"Community"} disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation();
                handleCollapse("community");
              }}
            >
              <ListItemIcon>
                <Image
                  src={communityIcon}
                  alt="Community Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary="Community" />
              {openCommunity ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openCommunity} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Service Providers" />
                {">"}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Audiences" />
                {">"}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; My Listings" />
                {">"}
              </ListItemButton>
            </List>
          </Collapse>
        </div>

        {/* Requests  */}
        <div className="py-2">
          <ListItem key={"Requests"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src={requestsIcon}
                  alt="Requests Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary={"Requests"} />
            </ListItemButton>
          </ListItem>
        </div>

        {/* My Trips  */}
        <div className="py-2">
          <ListItem key={"My Trips"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src={tripsIcon}
                  alt="My Trips Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary={"My Trips"} />
            </ListItemButton>
          </ListItem>
        </div>

        {/* My Calendar  */}
        <div className="py-2">
          <ListItem key={"My Calendar"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src={calendarIcon}
                  alt="My Calendar Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary={"My Calendar"} />
            </ListItemButton>
          </ListItem>
        </div>

        {/* Finances  */}
        <div className="py-2">
          <ListItem key={"Finances"} disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation();
                handleCollapse("finances");
              }}
            >
              <ListItemIcon>
                <Image
                  src={financesIcon}
                  alt="Finances Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary="Finances" />
              {openFinances ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openFinances} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Payables" />
                {">"}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Receivables" />
                {">"}
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText primary="&bull;&nbsp; Transactions" />
                {">"}
              </ListItemButton>
            </List>
          </Collapse>
        </div>

        {/* Account  */}
        <div className="py-2">
          <ListItem key={"Account"} disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation();
                handleCollapse("account");
              }}
            >
              <ListItemIcon>
                <Image
                  src={accountIcon}
                  alt="Account Icon"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText primary="Account" />
              {openAccount ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openAccount} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Inside Dashboard 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Inside Dashboard 2" />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Image src={navIcon} alt="Navbar Icon" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
