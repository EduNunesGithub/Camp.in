import {
    SxProps,
    Theme
} from "@mui/material";
import Box from "@mui/material/Box";

import { pxToRem } from "../../utils/unitConverter";

import logo from "/SVG/logo.svg";

interface HeaderProps {
    customStyles?: SxProps<Theme> | undefined;
};

export const Header = ({
    customStyles
}: HeaderProps) => {
    return (
        <Box
            component="header"
            sx={{
                px: {
                    xs: pxToRem(20),
                    md: pxToRem(40)
                },
                py: pxToRem(20),
                ...customStyles
            }}
        >
            <Box
                alt="Logo de camp.in"
                component="img"
                src={logo}
                sx={{
                    objectFit: "cover",
                    width: pxToRem(115),
                    height: pxToRem(28),
                    
                }}
            />
        </Box>
    );
};