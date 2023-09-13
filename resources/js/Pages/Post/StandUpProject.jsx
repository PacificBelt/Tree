import React from "react";

import {
    Box,
    Button,
    Paper,
    Select,
    TextField,
    Typography,
    MenuItem,
    FormControl,
    InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useForm, usePage } from "@inertiajs/react";

import ScrollToTop from "@/Components/ScrollToTop";

const Input = styled("input")({
    display: "none",
});

const StandUpProject = () => {
    const auth = usePage().props.auth;
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        min_amount: "",
        goal_amount: "",
        deadline: "",
        description: "",
        header: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("project.create"));
    };
    return (
        <>
            <Header auth={auth} />
            <Paper
                sx={{
                    p: 4,
                    width: "1000px",
                    m: "30px auto",
                }}
            >
                <Box mt={2}>
                    <Button>戻る</Button>
                </Box>
                <Typography variant="h4" component="h1" align="center">
                    クラウドファンディングを開始する
                </Typography>
                <form onSubmit={submit}>
                    <Box mt={2}>
                        <Typography mb={1}>タイトル</Typography>
                        <TextField
                            placeholder="オリジナルタイトルを設定しましょう"
                            variant="outlined"
                            fullWidth
                            value={data.title}
                            autoComplete="title"
                            onChange={(e) => setData("title", e.target.value)}
                            required
                            sx={{ mt: 1 }}
                        />
                    </Box>
                    <Box mt={4}>
                        <Typography mb={1}>プロジェクト詳細</Typography>
                        <TextField
                            placeholder="〇行程度でまとめましょう"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={10}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                            sx={{ mt: 1 }}
                        />
                    </Box>
                    <Box mt={4}>
                        <Typography mb={1}>タグ</Typography>
                        <FormControl sx={{ width: 231 }}>
                            <InputLabel></InputLabel>
                            <Select defaultValue={""} displayEmpty>
                                <MenuItem disabled value="">
                                    選択してください
                                </MenuItem>
                                <MenuItem value={0}>小説</MenuItem>
                                <MenuItem value={1}>アニメ</MenuItem>
                                <MenuItem value={2}>漫画</MenuItem>
                                <MenuItem value={3}>その他</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={4}>
                        <Typography mb={1}>最低支援額</Typography>
                        <TextField
                            placeholder="(例) 1,000"
                            variant="outlined"
                            value={data.min_amount}
                            onChange={(e) =>
                                setData("min_amount", e.target.value)
                            }
                            required
                            sx={{ mt: 1, width: 231 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        円
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box mt={4}>
                        <Typography mb={1}>目標金額</Typography>
                        <TextField
                            placeholder="(例) 100,000"
                            variant="outlined"
                            value={data.goal_amount}
                            onChange={(e) =>
                                setData("goal_amount", e.target.value)
                            }
                            required
                            sx={{ mt: 1, width: 231 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        円
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box mt={4}>
                        <Typography mb={1}>募集終了日</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disablePast
                                value={data.deadline}
                                onChange={(selectedDate) =>
                                    setData("deadline", selectedDate)
                                }
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box mt={4}>
                        <Typography>メイン画像</Typography>
                        <label htmlFor="contained-button-file">
                            <Input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                                enctype="multipart/form-data"
                            />
                            <Button
                                variant="outlined"
                                sx={{ mt: 1, width: 231 }}
                            >
                                画像をアップロードする
                            </Button>
                        </label>
                    </Box>
                    <Box mt={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={processing}
                        >
                            投稿する
                        </Button>
                    </Box>
                </form>
            </Paper>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default StandUpProject;
