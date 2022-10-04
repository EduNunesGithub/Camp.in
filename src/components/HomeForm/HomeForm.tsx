import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from "@mui/material/Box";
import Snackbar from '@mui/material/Snackbar';
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from '@mui/material';
import { useState } from 'react';

import { Input } from '../HTMLComponents/Input';
import { Button } from '../HTMLComponents/Button';
import { Checkbox } from '../HTMLComponents/Checkbox';
import { Link } from '../HTMLComponents/Link';

import { pxToRem } from "../../utils/unitConverter";

interface HomeFormProps {
    sx?: SxProps<Theme> | undefined;
};

export const HomeForm = ({
    sx
}: HomeFormProps) => {
    const [devMessage, setDevMessage] = useState<boolean>(false);

    const closeDevMessage = () => setDevMessage(false);

    return (
        <Box
            component="form"
            sx={{
                width: "100%",
                maxWidth: pxToRem(335),
                ...sx
            }}
        >
            <Box
                component="header"
                sx={{
                    display: "flex",
                    gap: pxToRem(5),
                    flexDirection: "column",
                    mb: pxToRem(28)
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        display: "flex",
                        gap: pxToRem(10),
                        alignItems: "center",
                        color: "#D4CCB6",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: pxToRem(24),
                        fontWeight: 600,
                        lineHeight: pxToRem(36)
                    }}
                >
                    <LoginIcon
                        sx={{
                            color: "#FFC632"
                        }}
                    />

                    Faça seu login
                </Typography>

                <Typography
                    component="p"
                    sx={{
                        color: "#AFB6C2",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: pxToRem(16),
                        fontWeight: 500,
                        lineHeight: pxToRem(24)
                    }}
                >
                    Entre com suas informações de cadastro.
                </Typography>
            </Box>

            <Box
                component="div"
                sx={{
                    display: "flex",
                    gap: pxToRem(20),
                    flexDirection: "column",
                }}
            >
                <Input
                    Icon={MailOutlineIcon}
                    id="home-form-e-mail"
                    name="E-mail"
                    placeholder="Digite seu e-mail"
                    required={true}
                    type="email"
                />

                <Input
                    Icon={LockIcon}
                    id="home-form-password"
                    name="Senha"
                    placeholder="Digite sua senha"
                    required={true}
                    type="password"
                />

                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Checkbox
                        id="home-form-remember-me"
                        name="Lembre-me"
                    />

                    <Link
                        href='#'
                        onClick={() => setDevMessage(true)}
                    >
                        Esqueci minha senha
                    </Link>
                </Box>
            </Box>

            <Box
                component="footer"
                sx={{
                    display: "flex",
                    gap: pxToRem(14),
                    flexDirection: "column",
                    marginTop: pxToRem(20)
                }}
            >
                <Button
                    onClick={() => setDevMessage(true)}
                >
                    Entrar
                </Button>

                <Typography
                    component="p"
                    sx={{
                        display: "flex",
                        gap: pxToRem(5),
                        color: "#FFC632",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: pxToRem(14),
                        fontWeight: 400,
                        lineHeight: pxToRem(21)
                    }}
                >
                    Não tem uma conta?

                    <Link
                        href='#'
                        onClick={() => setDevMessage(true)}
                    >
                        Registre-se
                    </Link>
                </Typography>
            </Box>

            <Snackbar
                autoHideDuration={4000}
                message="Ops... Esse é um site de desenvolvimento"
                onClose={closeDevMessage}
                open={devMessage}
            />
        </Box>
    );
};