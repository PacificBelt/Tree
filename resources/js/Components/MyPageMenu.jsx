import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";

export default function MyPageMenu(props) {
    const { isOpen, toggleDrawer } = props;

    const DrawerHeader = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 8px",
        height: "64px",
    }));

    const list = () => (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer}>
            <List>
                <ListItem disablePadding>
                    {/* TODO: リンク先を設定する */}
                    <ListItemButton href="">
                        <ListItemIcon>
                            <EditNoteIcon />
                        </ListItemIcon>
                        <ListItemText primary={"作成したプロジェクト"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {/* TODO: リンク先を設定する */}
                    <ListItemButton href="">
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary={"支援したプロジェクト"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton href="editProfile">
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"アカウント情報編集"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    {/* TODO: リンク先を設定する */}
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"ログアウト"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <>
                <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
                    <DrawerHeader>
                        <Typography sx={{ pl: 2 }} variant="h6">
                            メニュー
                        </Typography>
                        <IconButton onClick={toggleDrawer}>
                            <CloseIcon />
                        </IconButton>
                    </DrawerHeader>
                    {list()}
                </Drawer>
            </>
        </div>
    );
}
