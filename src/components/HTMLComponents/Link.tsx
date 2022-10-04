import MUILink, { LinkProps } from "@mui/material/Link";

import { pxToRem } from "../../utils/unitConverter";

export const Link = (props: LinkProps) => {
    return (
        <MUILink
            {...props}
            sx={{
                position: "relative",
                color: "#FFC632",
                fontFamily: "Poppins, sans-serif",
                fontSize: pxToRem(14),
                fontWeight: 600,
                lineHeight: pxToRem(21),
                textDecoration: "none",
                outline: "none",
                width: "fit-content",
                "::after": {
                    content: '""',
                    background: "#FFC632",
                    position: "absolute",
                    bottom: pxToRem(-2),
                    left: 0,
                    borderRadius: `${pxToRem(2)} ${pxToRem(2)} 0 0`,
                    transitionDuration: "0.2s",
                    transitionProperty: "width",
                    transitionTimingFunction: "ease-in",
                    pointerEvents: "none",
                    width: 0,
                    height: pxToRem(2)
                },
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderColor: "transparent",
                    borderStyle: "solid",
                    borderWidth: pxToRem(1),
                    borderRadius: pxToRem(4),
                    boxShadow: "unset",
                    transitionDuration: "0.2s",
                    transitionProperty: "border-color, box-shadow",
                    pointerEvents: "none",
                    width: `calc(100% + ${pxToRem(5)})`,
                    height: `calc(100% + ${pxToRem(5)})`
                },
                ":focus": {
                    "::before": {
                        borderColor: "#FFC632",
                        boxShadow: `0 0 0 ${pxToRem(2)} #FFDE88`,
                    }
                },
                ":hover": {
                    "::after": {
                        width: "100%"
                    }
                }
            }}
        >
            {props.children}
        </MUILink>
    );
};