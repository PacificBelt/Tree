import {
    Box,
    Button,
    Link,
    Paper,
    TextField,
    Typography,
    Grid,
    Card,
} from "@mui/material";
import { Stack, Chip } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import AlarmIcon from "@mui/icons-material/Alarm";
import FavoriteIcon from "@mui/icons-material/Favorite";

import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useForm, usePage } from '@inertiajs/react';

export default function ProjectDetail(props) {
    const auth = usePage().props.auth;
    const { item } = props.project;
    useEffect(() => {
        const { item } = props.project;
        console.log(props.project);
    }, []);
    return (
        <>
            <Header auth={auth}/>
            <Paper
                sx={{
                    p: 4,
                    width: "95%",
                    m: "30px auto",
                    background: "#e8f5e9",
                }}
            >
                <Typography variant={"h3"} align="center" mb={5}>
                    {props.project.title}
                </Typography>
                <Box align="center" m={2}>
                    <Chip
                        icon={<PersonIcon fontSize="small" />}
                        label={props.project.userName}
                    />
                    {/* <Chip icon={<SellIcon fontSize="small" />} label={"[ハッシュタグ名]"} /> */}
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item md={7} sm={12} xs={12}>
                        <Card>
                            <Box m={3} sx={{ borderRadius: "5px" }}>
                                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"></img>
                            </Box>
                            <Box m={3}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.project.description.replace(
                                            /\n/g,
                                            "<br />"
                                        ),
                                    }}
                                ></div>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item md={5} sm={12} xs={12}>
                        <Card>
                            <Box m={3}>
                                <Typography variant={"h6"}>
                                    ¥ 現在の支援金総額
                                </Typography>
                                <Typography variant={"h3"}>
                                    {props.project.currentAmount.toLocaleString()}円
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={props.project.currentAmount / props.project.goal_amount}
                                    sx={{
                                        height: "10px",
                                        borderRadius: "5px",
                                        background: "lightgrey",
                                    }}
                                />
                                <Typography variant="subtitle1">
                                    達成率 {(props.project.currentAmount / props.project.goal_amount).toLocaleString()}%
                                </Typography>
                                <Typography variant="subtitle1">
                                    目標金額{" "}
                                    {props.project.goal_amount.toLocaleString()}円
                                </Typography>
                            </Box>
                            <Box m={3}>
                                <Stack direction="row">
                                    <FavoriteIcon
                                        fontSize="medium"
                                        sx={{ margin: "5px" }}
                                    />
                                    <Typography variant="h6">支援者数</Typography>
                                </Stack>
                                <Typography variant={"h4"}>
                                    {props.project.numDonations.toLocaleString()}人
                                </Typography>
                            </Box>
                            <Box m={3}>
                                <Stack direction="row">
                                    <AlarmIcon
                                        fontSize="medium"
                                        sx={{ margin: "5px" }}
                                    />
                                    <Typography variant="h6">締め切りまで</Typography>
                                </Stack>
                                <Typography variant={"h4"}>
                                    あと{" "}
                                    {parseInt((new Date(props.project.deadline) - new Date()) / 1000 / 60 / 60 / 24)}
                                    {" "}日
                                </Typography>
                                <Typography variant={"h5"} mt={1}>
                                    締め切り{" "}
                                    {new Date(props.project.deadline).toLocaleDateString('jp-jp', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
                                </Typography>
                            </Box>
                        </Card>
                        <Box align="center" mt={3}>
                            {(props.auth.user.name == props.project.userName) ?
                                <Button variant="contained" size="large" href={route("project.edit", { id: (props.project.id) })} > プロジェクトを編集する</Button>
                                :
                                <Button variant="contained" size="large" href={route("payment", { id: (props.project.id) })} > このプロジェクトを支援する</Button>
                            }
                        </Box>
                    </Grid>
                </Grid >
            </Paper >
            <Footer />
        </>
    );
}
