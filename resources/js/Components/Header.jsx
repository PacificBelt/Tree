import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MyPageMenu from "./MyPageMenu";

export default function MenuAppBar() {
    const [auth, setAuth] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <AppBar position="sticky" sx={{ mb: 2 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tree
                </Typography>
                {auth && (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <MyPageMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
