import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Box from "@mui/material/Box";
import { SvgIconComponent } from "@mui/icons-material";
import {
    useRef,
    useState
} from "react";

import { pxToRem } from "../../utils/unitConverter";

interface HomeFormInputProps {
    Icon?: SvgIconComponent;
    id: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    type?: React.HTMLInputTypeAttribute | undefined;
};

export const HomeFormInput = ({
    Icon,
    id,
    name,
    placeholder,
    required,
    type
}: HomeFormInputProps) => {
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [passwordLockHover, setPasswordLockHover] = useState<boolean>(false);

    const inputComponent = useRef<HTMLInputElement>(null);
    const passwordIconContainer = useRef<HTMLDivElement>(null);

    const passwordLockCollision = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (!passwordIconContainer.current) return false;

        const iconRadius = passwordIconContainer.current.getBoundingClientRect().width / 2;
        const iconXPos = passwordIconContainer.current.getBoundingClientRect().x + iconRadius;
        const iconYPos = passwordIconContainer.current.getBoundingClientRect().y + iconRadius;

        const dx = event.pageX - iconXPos;
        const dy = event.pageY - iconYPos;

        const distance = ((dx ** 2) + (dy ** 2)) ** 0.5;

        if (distance <= iconRadius) return true;

        return false;
    };

    const passwordLockOnClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const hoverStatus = passwordLockCollision(event);

        if (!inputComponent.current || hoverStatus === false) return;

        const type = inputComponent.current.type;

        switch (type) {
            case "password":
                inputComponent.current.type = "text";
                break;
            case "text":
                inputComponent.current.type = "password";
                break;
            default:
                inputComponent.current.type = "password";
                break;
        }

        setIsPasswordVisible(!isPasswordVisible);
    };

    const passwordLockOnHover = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (!inputComponent.current) return;

        const hoverStatus = passwordLockCollision(event);

        switch (hoverStatus) {
            case true:
                if (passwordLockHover !== true) {
                    setPasswordLockHover(true);

                    inputComponent.current.style.cursor = "pointer";
                };
                break;
            case false:
                if (passwordLockHover !== false) {
                    setPasswordLockHover(false);

                    inputComponent.current.style.cursor = "text";
                };
                break;
        };
    };

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                gap: pxToRem(5),
                flexDirection: "column"
            }}
        >
            <Box
                component="label"
                htmlFor={id}
                sx={{
                    color: "#AFB6C2",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: pxToRem(16),
                    fontWeight: 500,
                    lineHeight: pxToRem(24),
                    width: "fit-content"
                }}
            >
                {name}
            </Box>

            <Box
                component="div"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative"
                }}
            >
                {Icon !== undefined && (
                    <Icon
                        strokeWidth={pxToRem(2)}
                        sx={{
                            position: "absolute",
                            left: pxToRem(12),
                            color: inputFocused ? "#FFC632" : "#AFB6C2",
                            fontSize: pxToRem(20),
                            transitionDuration: "0.2s",
                            transitionProperty: "color",
                            pointerEvents: "none"
                        }}
                    />
                )}

                <Box
                    autoComplete="off"
                    component="input"
                    id={id}
                    onBlur={() => setInputFocused(false)}
                    onChange={(event) => setInputValue(event.target.value)}
                    onClick={(event) => passwordLockOnClick(event)}
                    onFocus={() => setInputFocused(true)}
                    onMouseMove={(event) => passwordLockOnHover(event)}
                    placeholder={placeholder}
                    ref={inputComponent}
                    required={required}
                    type={type}
                    value={inputValue}
                    sx={{
                        background: "none",
                        color: "#A9AFB9",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: pxToRem(14),
                        fontWeight: 400,
                        lineHeight: pxToRem(16.40),
                        borderColor: inputFocused ? "#FFC632" : "#868686",
                        borderRadius: pxToRem(4),
                        borderStyle: "solid",
                        borderWidth: pxToRem(1),
                        boxShadow: inputFocused ? `0 0 0 ${pxToRem(2)} #FFDE88` : "none",
                        outline: "none",
                        paddingRight: type === "password" ? pxToRem(37) : pxToRem(12),
                        paddingLeft: Icon === undefined ? pxToRem(12) : pxToRem(37),
                        transitionDuration: "0.2s",
                        transitionProperty: "border-color, box-shadow",
                        userSelect: "none",
                        width: "100%",
                        height: pxToRem(44),
                        "::placeholder": {
                            color: "#A9AFB9"
                        }
                    }}
                />

                {type === "password" && (
                    <Box
                        ref={passwordIconContainer}
                        sx={{
                            background: passwordLockHover ? "rgba(175, 182, 194, 0.2)" : "none",
                            position: "absolute",
                            right: pxToRem(8),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            transitionDuration: "0.2s",
                            transitionProperty: "background",
                            pointerEvents: "none",
                            width: pxToRem(28),
                            height: pxToRem(28),
                        }}
                    >
                        <VisibilityIcon
                            strokeWidth={pxToRem(2)}
                            sx={{
                                opacity: isPasswordVisible ? 1 : 0,
                                position: "absolute",
                                color: inputFocused ? "#FFC632" : "#AFB6C2",
                                fontSize: pxToRem(20),
                                transitionDuration: "0.6s",
                                transitionProperty: "opacity"
                            }}
                        />

                        <VisibilityOffIcon
                            strokeWidth={pxToRem(2)}
                            sx={{
                                opacity: isPasswordVisible ? 0 : 1,
                                position: "absolute",
                                color: inputFocused ? "#FFC632" : "#AFB6C2",
                                fontSize: pxToRem(20),
                                transitionDuration: "0.6s",
                                transitionProperty: "opacity"
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};