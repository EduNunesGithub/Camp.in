import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";

import { pxToRem } from "../../utils/unitConverter";

export const Button = (props: ButtonBaseProps) => {
    return (
        <ButtonBase
            {...props}
            sx={{
                background: "#FFC632",
                position: "relative",
                color: "#473404",
                fontFamily: "Poppins, sans-serif",
                fontSize: pxToRem(18),
                fontWeight: 600,
                letterSpacing: "0.015em",
                lineHeight: pxToRem(27),
                borderRadius: pxToRem(4),
                padding: pxToRem(12),
                transitionDuration: "0.2s",
                transitionProperty: "opacity",
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
                    opacity: 0.8
                }
            }}
        >
            {props.children}
        </ButtonBase>
    );
};