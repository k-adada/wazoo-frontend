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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import searchIcon from "../../assets/Icon_Search_Black.png";
import audienceIcon from "../../assets/audience.svg";
import filterIcon from "../../assets/Icon_Itinerary.png";
import Image from "next/image";

type Anchor = "right";

export default function AudienceDrawer(props: {
  openAudiences: any;
  setOpenAudiences: any;
  audienceData: any[];
  setAudienceData: any;
}) {
  const { openAudiences, setOpenAudiences, audienceData, setAudienceData } =
    props;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenAudiences(open);
      // setState({ ...state, [anchor]: open });
    };

  React.useEffect(() => {
    setState({ ...state, right: openAudiences });
  }, [openAudiences]);

  const handleClick = (event: React.MouseEvent) => {
    // Check if the click was inside a ListItem component
    const isListItemClick = (event.target as HTMLElement).closest(
      ".MuiListItem-root"
    );

    // Close the drawer only if the click was not on a list item or inside a list item
    if (!isListItemClick) {
      toggleDrawer("right", false)(event);
    }
  };

  React.useEffect(() => {
    console.log("audienceData", audienceData);
  }, [audienceData]);

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={handleClick}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <>
          <div className="px-4" style={{ maxWidth: "470px" }}>
            <div className="row rounded-lg pt-3 pb-[90px]">
              <div className="col-12">
                {/* search activities  */}
                <div className="row px-2">
                  <div className="col">
                    <div className="absolute left-6 top-3 pointer">
                      <Image src={searchIcon} alt="search icon" />
                    </div>
                    <input
                      type="text"
                      className="rounded-lg bg-blue text-darkblue pl-10 pr-5 py-3 w-full"
                      placeholder="Search Activity"
                    />
                  </div>
                  <div className="col-auto self-center">
                    <Image src={filterIcon} alt="filter" />
                  </div>
                </div>
              </div>
              <div className="col-12 flex px-2 pb-3 pt-8 justify-between">
                <div className="px-4">
                  <div className="rounded-lg bg-blue py-3 px-4 text-darkblue poppins-medium pointer">
                    Audiences
                  </div>
                </div>

                <div className="rounded-lg py-3 px-8 text-grey poppins-medium pointer">
                  <input
                    type="checkbox"
                    style={{ width: "16px", height: "16px" }}
                  />
                </div>
              </div>

              {audienceData.map((audience, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        let newAudienceData = [...audienceData];
                        newAudienceData[index].selected = !audience.selected;
                        setAudienceData(newAudienceData);
                        console.log(newAudienceData);
                      }}
                    >
                      <div className="col-12 px-2">
                        <div className="flex py-2 px-2 border-dashed rounded-lg items-center justify-between">
                          <div className="flex">
                            <Image
                              src={audience.image}
                              alt="tour image"
                              className="rounded-lg"
                              style={{
                                width: "70px",
                                height: "70px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="pl-3">
                              <div className="f-24 text-darkblue poppins-medium">
                                {audience.name}
                              </div>
                              <div className="flex items-center">
                                <div className="f-24 poppins-semibold text-darkblue">
                                  {audience.agencies?.length}
                                </div>
                                <div className="f-14 text-darkblue">
                                  &nbsp; Agencies
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pr-2 pointer">
                            <input
                              type="checkbox"
                              style={{ width: "16px", height: "16px" }}
                              // value={audience.selected}
                              checked={audience.selected}
                            />
                          </div>
                        </div>
                      </div>
                    </ListItemButton>
                  </ListItem>
                );
              })}

              <div className="fixed w-[440px] right-[24px] bottom-10">
                <div className="dark-button text-gold poppins-medium cursor-pointer">
                  <div className="flex items-center justify-center h-full">
                    <Image src={audienceIcon} alt="audienceIcon" />
                    <div className="pl-4">Link Audience(s)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        {/* <Button onClick={toggleDrawer("right", true)}>{"wwwwwwwww"}</Button> */}
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
