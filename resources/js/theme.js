import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#466900",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#a1c323",
            contrastText: "#795548",
        },
        background: {
            default: "#bdbdbd",
        },
        text: { primary: "#000000"},
    },
});

export default theme;
