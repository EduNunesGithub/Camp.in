import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";

import { pxToRem } from "../../utils/unitConverter";

interface Checkbox {
    id: string;
    name?: string;
    required?: boolean;
};

export const Checkbox = ({
    id,
    name,
    required
}: Checkbox) => {
    const [checked, setChecked] = useState(false);

    return (
        <Box
            component="label"
            sx={{
                position: "relative",
                display: "flex",
                gap: pxToRem(5),
                alignItems: "center",
                color: "#A9AFB9",
                fontFamily: "Roboto, sans-serif",
                fontSize: pxToRem(16),
                fontWeight: 400,
                lineHeight: pxToRem(18.75),
                borderRadius: pxToRem(4),
                userSelect: "none",
                cursor: "pointer",
                width: "fit-content",
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
                ":focus-within": {
                    "::before": {
                        borderColor: "#FFC632",
                        boxShadow: `0 0 0 ${pxToRem(2)} #FFDE88`,
                    }
                }
            }}
        >
            <Box
                component="input"
                id={id}
                onChange={(event) => setChecked(event.target.checked)}
                required={required}
                type="checkbox"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 0,
                    height: 0
                }}
            />

            <Box
                component="div"
                sx={{
                    background: checked ? "#FFC632" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: checked ? "#FFC632" : "#868686",
                    borderStyle: "solid",
                    borderRadius: pxToRem(4),
                    borderWidth: pxToRem(1),
                    transitionDuration: "0.2s",
                    transitionProperty: "background, border-color",
                    width: pxToRem(20),
                    height: pxToRem(20)
                }}
            >
                <CheckIcon
                    strokeWidth={pxToRem(2)}
                    sx={{
                        opacity: checked ? 1 : 0,
                        color: "#473404",
                        fontSize: pxToRem(20),
                        transitionDuration: "0.2s",
                        transitionProperty: "opacity"
                    }}
                />
            </Box>

            {name}
        </Box>
    );
};