import { Breadcrumbs, Typography, type TypeText, type TypographyPropsColorOverrides } from "@mui/material"
import type { OverridableStringUnion } from "@mui/types";
import { type JSXElementConstructor, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css"


type TypografyColor = OverridableStringUnion<'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | `text${Capitalize<keyof TypeText>}`, TypographyPropsColorOverrides> | (string & {});


export interface ItemsData
{
    label: string;
    to?: string;
    icon?: ReactElement;
}


interface Props
{
    title?: string;
    items?: ItemsData[];
    separator?: string;
    defaultColor?: TypografyColor;
    activeColor?: TypografyColor;
    maxItems?: number;
}


const BaseBreadCrumb: React.FC<Props> = (
    {
    title = "Página sem Título",
    items,
    separator = '>',
    defaultColor = "text.secondary",
    activeColor = "text.primary",
    maxItems,
    }
) =>
{
    const navigate = useNavigate();

    const navigateTo = (url?: string) =>
    {
        if(url == undefined || url == null || url.length <= 0)
            { return; }

        navigate(url);
    }

    const breadcrumbItem = (item: ItemsData): ReactElement =>
    {
        return (
            <div>
                {item.icon}
                <Typography
                    onClick={()=>{navigateTo(item.to)}}
                    color={defaultColor}
                    className={item.to?'clickable':''}
                >
                    {item.label}
                </Typography>
            </div>
        )
    }

    const breadCrumbItems = (): (ReactElement<unknown, string | JSXElementConstructor<any>> | undefined)[] =>
    {
        return items?.map(
                (item, index) =>
                {
                    if(index == items.length)
                        { return; }
                    return breadcrumbItem(item);
                }
            )??[];
    }

    const showBreadcrumbs = (): ReactElement =>
    {
        if(items == undefined || items == null || items.length <= 0)
            { return <></>; }

        return (
            <Breadcrumbs
                separator={separator}
                maxItems={maxItems}
            >
                { ...breadCrumbItems() }
                <Typography color={activeColor}> {title} </Typography>
            </Breadcrumbs>
        )
    }

    return (
        <>
            { showBreadcrumbs() }
            <Typography variant="h3" color="textSecondary"> {title} </Typography>
        </>
    )
}


export default BaseBreadCrumb;

