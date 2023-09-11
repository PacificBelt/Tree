import React from "react";
import { Box, Button, Paper, Select, TextField, Typography, MenuItem, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Input = styled('input')({
    display: 'none',
});

const StandUpProject = () => {
    return (
        <Paper
            sx={{
                p: 4,
                width: "1000px",
                m: "30px auto",
            }}
        >
            <Typography variant={"h5"}>クラウドファンディングを開始する</Typography>
            <Box mt={2}>
                <Typography mb={1}>タイトル</Typography>
                <TextField
                    label="title"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                />
            </Box>
            <Box mt={4}>
                <Typography mb={1}>プロジェクト詳細</Typography>
                <TextField
                    label="〇行程度でまとめましょう"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    required
                    sx={{ mt: 1 }}
                />
            </Box>
            <Box mt={4}>
                <Typography mb={1}>タグ</Typography>
                <FormControl sx={{minWidth: 120}}>
                    <InputLabel>(試作です)
                    </InputLabel>
                    <Select
                        label="tag">
                        <MenuItem value={0}>小説</MenuItem>
                        <MenuItem value={1}>アニメ</MenuItem>
                        <MenuItem value={2}>漫画</MenuItem>
                        <MenuItem value={3}>その他</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box mt={4}>
                <Typography mb={1}>目標金額</Typography>
                <TextField
                    label="(例)100,000"
                    variant="outlined"
                    required
                    sx={{ mt: 1 }}
                />
            </Box>
            <Box mt={4}>
                <Typography mb={1}>募集終了日</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
            </Box>
            <Box mt={4}>
                <Typography>メイン画像</Typography>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained">
                    画像をアップロードする
                    </Button>
                </label>
            </Box>
            <Box mt={4}>
                <Button 
                    variant="contained"
                    color="success"
                    fullWidth
                >
                    投稿する
                </Button>
            </Box>
        </Paper>
    );
};

export default StandUpProject;
