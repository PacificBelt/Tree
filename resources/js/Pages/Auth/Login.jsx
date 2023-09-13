import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useForm, usePage} from "@inertiajs/react";
import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Login({ status, canResetPassword }) {
    const auth = usePage().props.auth;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Box sx={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header auth={auth}/>
            <Paper
                sx={{
                    p: 4,
                    width: "500px",
                    m: "auto"
                }}
            >
                <Typography variant={"h5"}>ログイン</Typography>
                <Box mt={2}>
                    <InputLabel htmlFor="email" />
                    <TextField
                        label="メールアドレス"
                        variant="standard"
                        fullWidth
                        value={data.email}
                        autoComplete="username"
                        required
                        sx={{ mt: 1 }}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />

                    <InputLabel htmlFor="password" />
                    <TextField
                        type="password"
                        label="パスワード"
                        variant="standard"
                        fullWidth
                        value={data.password}
                        autoComplete="password"
                        required
                        sx={{ mt: 1 }}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </Box>
                <Link href="/dashboard">
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4 }}
                        disabled={processing}
                        onClick={submit}
                    >
                        ログイン
                    </Button>
                </Link>

                <Box sx={{ mt: 1 }}>
                    <Typography variant="caption">
                        パスワードを忘れた方は
                        <Link href={route("password.request")}>こちら</Link>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption">
                        新規登録は
                        <Link href={route("register")}>こちら</Link>
                    </Typography>
                </Box>
            </Paper>
            <Box sx={{flexGrow:1}}></Box>
            <Footer />
        </Box>
    );
}
