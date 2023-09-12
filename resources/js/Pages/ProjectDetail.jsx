import { Box, Button, Link, Paper, TextField, Typography, Grid, Card } from "@mui/material";
import { Stack, Chip } from "@mui/material";
import SellIcon from '@mui/icons-material/Sell';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import AlarmIcon from '@mui/icons-material/Alarm';

import LinearProgress from '@mui/material/LinearProgress';

export default function ProjectDetail() {
    return (
        <Paper
            sx={{
                p: 4,
                width: "95%",
                m: "30px auto",
                background:"#e8f5e9"
            }}
        >

            <Typography
                variant={"h3"}
                align="center"
                mb={5}
            >
                [プロジェクト名]
            </Typography>
            <Box align="center" m={2}>
                <Chip icon={<PersonIcon fontSize="small" />} label={"[プロジェクト作者名]"} />
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
                            <Typography variant={"subtitle1"}>
                                [プロジェクトの概要]
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
                                quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum
                                fugiat deleniti? Eum quasi quidem quibusdam.
                            </Typography>
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
                                123,456,789円
                            </Typography>
                            <linearGradient id="linearColors" gradientTransform="rotate(90)">
                                <stop offset={0} stopColor="#0080FE" />
                                <stop offset={1} stopColor="#00DDDD" />
                            </linearGradient>
                            <LinearProgress
                                variant="determinate"
                                value={60}
                                sx={{
                                    height: "10px",
                                    borderRadius: "5px",
                                    background: 'lightgrey',
                                }}
                            />
                            <Typography variant="subtitle1">
                                達成率 60%
                            </Typography>
                            <Typography variant="subtitle1">
                                目標金額 {(123456789 / 0.6).toLocaleString()}円
                            </Typography>
                        </Box>
                        <Box m={3} >
                            <Stack direction="row">
                                <GroupsIcon fontSize="medium" sx={{ margin: "5px" }} />
                                <Typography variant="h6">
                                    支援者数
                                </Typography>
                            </Stack>
                            <Typography variant={"h4"}>
                                123人
                            </Typography>
                        </Box>
                        <Box m={3} >
                            <Stack direction="row">
                                <AlarmIcon fontSize="medium" sx={{ margin: "5px" }} />
                                <Typography variant="h6">
                                    締め切りまで
                                </Typography>
                            </Stack>
                            <Typography variant={"h4"}>
                                50日
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </ Paper>
    );
}
