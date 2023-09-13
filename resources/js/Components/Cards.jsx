import AlarmIcon from "@mui/icons-material/Alarm";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    CardActionArea,
    LinearProgress,
} from "@mui/material";

export default function Cards(props) {
    const { items } = props;

    return (
        <>
            <Box
                sx={{ display: "flex", alignItems: "flex-end" }}
                px={4}
                gap={1}
            ></Box>
            <Grid container spacing={2} p={4}>
                {items.map((item) => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                        <Card>
                            <CardActionArea
                                sx={{ height: "500px", width: "100%", pb: 2 }}
                                href={route("project.show", { id: item.id })}
                                disableRipple
                            >
                                <CardContent
                                    sx={{
                                        px: 0,
                                        pt: 0,
                                        height: "100%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="120"
                                            image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                                        ></CardMedia>

                                        <Typography variant="h6" px={2} pt={1}>
                                            {item.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                px: 2,
                                            }}
                                            gap={0.5}
                                        >
                                            <PersonIcon
                                                fontSize="16px"
                                                color="primary"
                                            />
                                            <Typography fontSize="16px">
                                                {item.createdBy}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                py: 0.5,
                                                display: "flex",
                                                gap: 2,
                                                alignItems: "center",
                                                width: "85%",
                                            }}
                                        >
                                            <LinearProgress
                                                color="secondary"
                                                variant="determinate"
                                                value={
                                                    (item.currentAmount / item.goalAmount) * 100 > 100 ?
                                                        100 :
                                                        (item.currentAmount / item.goalAmount) * 100
                                                }
                                                sx={{
                                                    height: "10px",
                                                    borderRadius: "5px",
                                                    background: "lightgrey",
                                                    width: "80%",
                                                }}
                                            />
                                            <Typography>
                                                {Math.round(
                                                    (item.currentAmount /
                                                        item.goalAmount) *
                                                    100
                                                )}
                                                %
                                            </Typography>
                                        </Box>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.content,
                                            }}
                                            style={{
                                                fontSize: "14px",
                                                padding: "8px 16px",
                                            }}
                                        ></div>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-around",
                                                width: "100%",
                                                // height: "50px",
                                                px: 2,
                                                py: 1,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    width: "80px",
                                                }}
                                            >
                                                <CurrencyYenIcon color="primary" />
                                                <Typography variant="caption">
                                                    現在金額
                                                </Typography>
                                                <Typography fontWeight="bold">
                                                    {item.currentAmount.toLocaleString()}{" "}
                                                    円
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    width: "80px",
                                                }}
                                            >
                                                <FavoriteIcon color="primary" />
                                                <Typography variant="caption">
                                                    支援者
                                                </Typography>
                                                <Typography fontWeight="bold">
                                                    {item.numDonations} 人
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    width: "80px",
                                                }}
                                            >
                                                <AlarmIcon color="primary" />
                                                <Typography variant="caption">
                                                    残り日数
                                                </Typography>
                                                <Typography fontWeight="bold">
                                                    {parseInt(
                                                        (new Date(
                                                            item.deadline
                                                        ) -
                                                            new Date()) /
                                                        1000 /
                                                        60 /
                                                        60 /
                                                        24
                                                    )}{" "}
                                                    日
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
