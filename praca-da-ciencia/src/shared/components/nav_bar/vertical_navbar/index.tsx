import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Logo from "@/shared/components/logo";
import SwitchThemeButton from "@/shared/components/set_theme";

import NavItem, { type Props as NavItems } from "../shared/NavItem"


/* TODO: Falta Criar responsividade para dispositivos Mobile */


export interface Props
{
  items: NavItems[];
  drawerWidth: number;
}

const VerticalSideBar: React.FC<Props> = ({ items, drawerWidth }) =>
{
  return (
    <Box sx={{ display: "flex"}}>
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
        <br/>
        <Logo sizeInPixels={150} />
        <br/>
        { items.map(i => <NavItem key={i.label} {...i}/>) }
        
        <SwitchThemeButton />
      </Drawer>
    </Box>
  );
}


export default VerticalSideBar;

