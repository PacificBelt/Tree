import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MyPageMenu from "./MyPageMenu";
import { Box, Button, Link } from "@mui/material";
import Logo from "@/../../public/tree_logo.png";

export default function MenuAppBar(props) {
    const { loginAndRegister, auth } = props;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <AppBar position="sticky" sx={{ mb: 3 }}>
            <Toolbar>
                <Link href="/" ml={3}>
                    {/* <img src="tree_logo.png" height="50px" /> */}
                    <img src={Logo} height="50px"/>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Button color="inherit" sx={{ mx: 1 }} href="/project/create">
                    プロジェクト作成
                </Button>
                {auth.user ? (
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
                        <MyPageMenu
                            isOpen={isDrawerOpen}
                            toggleDrawer={toggleDrawer}
                        />
                    </div>
                ) : (
                    loginAndRegister && (
                        <Box sx={{ display: "flex" }}>
                            <Button
                                color="inherit"
                                sx={{ mx: 1 }}
                                href={route("login")}
                            >
                                ログイン
                            </Button>
                            <Button
                                color="inherit"
                                sx={{ mx: 1 }}
                                href={route("register")}
                            >
                                新規登録
                            </Button>
                        </Box>
                    )
                )}
            </Toolbar>
        </AppBar>
    );
}
