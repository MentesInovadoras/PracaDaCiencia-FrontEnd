import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Collapse, List, ListItemIcon, Typography, type ButtonPropsColorOverrides, type TypeText } from "@mui/material";
import type { OverridableStringUnion } from "@mui/types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


type TextColorOptions = OverridableStringUnion<'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | `text${Capitalize<keyof TypeText>}`> | (string & {});
type ButtonColorOptions = OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>;



export interface Props
{
    label: string;

    to?: string;
    textColor?: TextColorOptions;
    linkColor?: ButtonColorOptions;

    icon?: React.FC;

    children?: Props[];
    nesting?: number;
}


const NavItem: React.FC<Props> = (
    {
        label,
        to='',
        textColor='text.primary',
        linkColor='info',
        icon,
        children,
        nesting = 0,
    }
) =>
{
    const [childrenControll, setChildrenControll] = useState(false);

    const navigate = useNavigate();

    const showChildren = () =>
    {
        if(children && children.length > 0)
        {
            children.forEach(c => c.nesting = nesting+1);
            setChildrenControll(!childrenControll);
        }
    }

    const redirect = (to?: string) =>
    {
        if(to && to.length > 0)
            { navigate(to); }
    }

    const itemAction = (item: Props) =>
    {
        if(item.children?.length??0 > 0)
            { showChildren() }
        else
            { redirect(item.to) }
    }

    const itemColor = (item: Props) =>
    {
        if(item.to && item.to.length > 0)
            { return item.linkColor; }
        console.log(item.label);
        return 'inherit';
    }

    const buildExpansor = (props: Props) =>
    {
        if(props.children)
        {
            return childrenControll ? <ExpandLess /> : <ExpandMore />;
        }
        return <></>;
    }

    const buildNavItem = (props: Props) =>
    {
        return(
            <Button
                onClick={()=>itemAction(props)}
                key={props.label}
                sx={{ pl: (props.nesting??0)*2+1, width: '100%', textAlign: 'left', justifyContent: 'flex-start' }}
                color={itemColor(props)}
            >
                { props.icon ? <ListItemIcon>{<props.icon />}</ListItemIcon> : <></> }

                <Typography
                    color={props.textColor}
                    variant="body1"
                    sx={{ textTransform: 'none' }}
                >
                    {props.label}
                </Typography>

                { buildExpansor(props) }
            </Button>
        )
    }

    const buildChildren = () =>
    {
        if(children && children.length > 0)
        {
            return (
                <Collapse
                    in={childrenControll}
                    timeout='auto'
                    unmountOnExit
                >
                    <List component='div' disablePadding>
                        { children.map(buildNavItem) }
                    </List>
                </Collapse>
            )
        }

        return <></>;
    }


    return (
        <>
        <List disablePadding>
            {
                buildNavItem({label, to, textColor, linkColor, icon, children, nesting})
            }   
        </List>
            {
                buildChildren()
            }
        </>
    )
}


export default NavItem;

