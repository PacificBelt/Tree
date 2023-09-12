import React from "react";
import { Box, Button, Paper, Select, TextField, Typography, MenuItem, FormControl, InputLabel, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm } from '@inertiajs/react';

const Input = styled('input')({
    display: 'none',
});

const EditProject = (props) => {
    const { project } = props;

    const {data, setData, post, processing} = useForm({
        title: project.title || '', 
        min_amount: project.min_amount || '', 
        description: project.description || '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('project.edit', { id: project.id }));
    };

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
            <form onSubmit={submit}>
                <Box mt={2}>
                    <Typography mb={1}>タイトル</Typography>
                    <TextField
                        label="オリジナルタイトルを設定しましょう"
                        fullWidth
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}     
                        sx={{ mt: 1 }}
                    />
                </Box>
                <Box mt={4}>
                    <Typography mb={1}>プロジェクト詳細</Typography>
                    <TextField
                        label="〇字程度でまとめましょう"
                        fullWidth
                        multiline
                        rows={10}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}  
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
                        value={data.min_amount}
                        onChange={(e) => setData('min_amount', e.target.value)}  
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
                        />
                    </LocalizationProvider>
                </Box>
                <Box mt={4}>
                    <Typography>メイン画像</Typography>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file"  enctype="multipart/form-data"/>
                        <Button variant="contained">
                        画像をアップロードする
                        </Button>
                    </label>
                </Box>
                <Box mt={4}>
                    <Button 
                        type="submit"
                        variant="contained"
                        color="success"
                        fullWidth
                        disabled={processing}
                    >
                        保存する
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default EditProject;
