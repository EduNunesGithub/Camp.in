import Box, { BoxProps } from "@mui/material/Box";

interface ImageProps {
    alt: string;
    src: string;
};

type ImagePropsType = BoxProps & ImageProps

export const Image = (props: ImagePropsType) => {
    return (
        <Box
            {...props}
            component="img"
        />
    );
};