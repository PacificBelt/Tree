import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
export default function Register() {
    return (
        <Paper
            sx={{
                p: 4,
                width: "500px",
                m: "30px auto",
            }}
        >
            <Typography variant={"h5"}>新規登録</Typography>
            <Box mt={2}>
                <TextField
                    label="本名"
                    variant="standard"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                />
                <TextField
                    label="メールアドレス"
                    variant="standard"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                />
            </Box>
            <Box mt={2}>
                <TextField
                    label="表示名"
                    variant="standard"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                />
                <TextField
                    type="password"
                    label="パスワード"
                    variant="standard"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                />
            </Box>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                sx={{ mt: 4 }}
            >
                登録
            </Button>
            <Box sx={{ mt: 1 }}>
                <Typography variant="caption">
                    すでにアカウントをお持ちの方は
                    <Link href="login">ログイン</Link>
                </Typography>
            </Box>
        </Paper>
    );
}
