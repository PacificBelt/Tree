import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MyPageMenu from "./MyPageMenu";
import { Box, Button, Link, Typography } from "@mui/material";
import Logo from "@/../../public/tree_logo.png";

export default function MenuAppBar(props) {
    const { loginAndRegister, auth } = props;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <AppBar position="sticky" color="inherit" sx={{ mb: 3 }}>
            <Toolbar>
                <Link href="/" mx={3}>
                    {/* <img src="tree_logo.png" height="50px" /> */}
                    <img src={Logo} height="50px"/>
                </Link>
                <Typography variant="caption">
                    「よみたい」と「かきたい」をつなげるクラウドファンディング
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                {auth.user ? (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="primary"
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
                                color="primary"
                                // variant="contained"
                                size="small"
                                sx={{ mx: 1 }}
                                href={route("login")}
                            >
                                ログイン
                            </Button>
                            <Button
                                color="primary"
                                // variant="contained"
                                size="small"
                                sx={{ mx: 1 }}
                                href={route("register")}
                            >
                                新規登録
                            </Button>
                        </Box>
                    )
                )}
                <Button color="secondary" variant="contained" size="small" sx={{ mx: 1 }} href="/project/create">
                    プロジェクト作成
                </Button>
            </Toolbar>
        </AppBar>
    );
}
