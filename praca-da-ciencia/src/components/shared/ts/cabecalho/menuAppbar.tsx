import { Button, Grid, Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";


export interface MenuOptionProps
{
    title: string;
    to: string;
}


interface MenuAppbarProps
{
    id: string;
    hide: string;
    options: MenuOptionProps[];
}

interface MenuAppbarPropsMask
{
    props: MenuAppbarProps[]
}


const MenuAppbar: React.FC<MenuAppbarPropsMask> = ({props}) => 
{
        const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
        const [openMenuId, setOpenMenuId] = React.useState<null | string>(null);
    
        const handleMenu = (event: React.MouseEvent<HTMLElement>, menuId: string) =>
            {
                setAnchor(event.currentTarget);
                setOpenMenuId(menuId);
            }

        const handleClose = () => { setAnchor(null); setOpenMenuId(""); }

    return (
        <>
            {
                props.map(menu => (
                <>
                    <Button color="inherit" onClick={(e)=>{handleMenu(e, menu.id)}}>
                        {menu.hide}
                    </Button>
                    <Menu
                    sx={{ mt: '45px' }}
                    id={menu.id}
                    anchorEl={anchor}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={openMenuId === menu.id}
                    onClose={handleClose}
                    >
                        {
                            menu.options.map(option => (
                                <>
                                    <Grid
                                    container
                                    direction={"column"}
                                    size={12}
                                    alignItems={"center"}
                                    key={option.to}
                                    >
                                        <NavLink
                                        to={option.to}
                                        >
                                            <MenuItem className={"inactivate-link"}>{option.title}</MenuItem>
                                        </NavLink>
                                    </Grid>
                                </>
                            ))
                        }
                    </Menu>
                </>
                ))
            }
            
        </>
    )
}


export default MenuAppbar;

