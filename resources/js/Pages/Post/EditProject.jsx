import React from "react";
import { Box, Button, Paper, Select, TextField, Typography, MenuItem, FormControl, InputLabel, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Input = styled('input')({
    display: 'none',
});

const EditProject = () => {
    return (
        <Paper
            sx={{
                p: 4,
                width: "1000px",
                m: "30px auto",
            }}
        >
            <Box mt={2}>
                <Button>
                    作成したプロジェクト一覧に戻る
                </Button>
            </Box>
            <Typography variant={"h5"}>プロジェクトを編集する</Typography>
            <Box mt={2}>
                <Typography mb={1}>タイトル</Typography>
                <TextField
                    required
                    label="オリジナルタイトルを設定しましょう"
                    defaultValue="From Database"
                    fullWidth
                    sx={{ mt: 1 }}
                />
            </Box>
            <Box mt={4}>
                <Typography mb={1}>プロジェクト詳細</Typography>
                <TextField
                    required
                    label="〇字程度でまとめましょう"
                    defaultValue="From Database"
                    fullWidth
                    multiline
                    rows={10}
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
                    disabled
                    label="変更不可"
                    defaultValue="From database"
                    variant="filled"
                    sx={{ mt: 1 }}
                    InputProps={{
                        readOnly: true,
                        endAdornment:(
                            <InputAdornment position="end">
                                円
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box mt={4}>
                <Typography mb={1}>最低支援額</Typography>
                <TextField
                    label="(例)500"
                    defaultValue="From Database"
                    required
                    sx={{ mt: 1 }}
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">
                                円
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box mt={4}>
                <Typography mb={1}>募集終了日</Typography>
                <LocalizationProvider required dateAdapter={AdapterDayjs}>
                    <DatePicker
                        disabled
                        label="変更不可"
                        defaultValue="From database"
                    />
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
                    保存する
                </Button>
            </Box>
        </Paper>
    );
};

export default EditProject;
