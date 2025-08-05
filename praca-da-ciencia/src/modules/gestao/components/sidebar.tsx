import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "@/shared/components/logo";
import { NavLink } from "react-router-dom";
import SwitchThemeButton from "@/shared/components/set_theme";
import Brightness1Icon from "@mui/icons-material/Brightness1";

/* TODO: Falta Criar responsividade para dispositivos Mobile */

export interface SideBarData {
  label?: string;
  to?: string;
  icon?: React.ReactElement;
}

export interface Props {
  sideBarData?: SideBarData[];
  drawerWidth: number;
}

export default function PermanentDrawerLeft({
  sideBarData = [
    {
      label: "gestao",
      to: "/gestao",
      icon: <Brightness1Icon />,
    },
    {
      label: "Daily",
      to: "/gestao/daily",
      icon: <Brightness1Icon />,
    },
    {
      label: "Weekly",
      to: "/gestao/weekly",
      icon: <Brightness1Icon />,
    },
  ],
  drawerWidth = 0,
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          alignItems: "space-between",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <br />
        <Logo sizeInPixels={150} />
        <br />
        <Toolbar />
        <List
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 3,
          }}
        >
          {sideBarData.map((item, index) => (
            <ListItem
              key={item.label || index}
              disablePadding
              sx={{ width: "100%", px: "2" }}
            >
              <NavLink
                to={item.to || "/"}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    py: 1.5,
                    px: 0,
                  }}
                >
                  {item.icon && (
                    <ListItemIcon sx={{ justifyContent: "center" }}>
                      {item.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item.label}
                    slotProps={{ primary: { color: "info" } }}
                    sx={{
                      textAlign: "center",
                      margin: "0",
                      "& .MuiListItemText-primary": {
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        <SwitchThemeButton />
      </Drawer>
    </Box>
  );
}
