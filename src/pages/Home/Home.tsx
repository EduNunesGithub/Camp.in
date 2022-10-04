import Box from "@mui/material/Box";

import { Header } from "../../components/Header/Header";
import { HomeForm } from "../../components/HomeForm/HomeForm";
import { Image } from "../../components/HTMLComponents/Image";

import { pxToRem } from "../../utils/unitConverter";

import banner from "/JPG/banner.jpg";

export const Home = () => {
    return (
        <>
            <Header
                customStyles={{
                    pt: pxToRem(40),
                    pb: pxToRem(30)
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    minHeight: `calc(100vh - ${pxToRem(102)})`
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: {
                            xs: "flex-start",
                            md: "center"
                        },
                        justifyContent: "center",
                        pt: {
                            xs: 0,
                            md: pxToRem(20)
                        },
                        pb: {
                            xs: pxToRem(30),
                            md: pxToRem(102 + 20)
                        },
                        px: pxToRem(20),
                        width: "50%",
                        minWidth: pxToRem(375),
                        minHeight: "inherit"
                    }}
                >
                    <HomeForm />
                </Box>

                <Box
                    sx={{
                        backgroundImage: `url(${banner})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        mt: pxToRem(-102),
                        flexGrow: 1,
                        minHeight: "inherit"
                    }}
                >
                    <Image
                        alt="Uma picape em um lago"
                        src={banner}
                        sx={{
                            width: 0,
                            height: 0
                        }}
                    />
                </Box>
            </Box>
        </>
    );
};