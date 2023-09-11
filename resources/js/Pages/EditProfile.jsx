import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useForm } from "@inertiajs/react";

export default function EditProfile() {
    // TODO: ログインしていないと見られないようにする

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        account_name: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Header />
            <Paper
                sx={{
                    p: 4,
                    width: "500px",
                    m: "30px auto",
                    flexGrow: 1,
                }}
            >
                <Typography variant={"h5"}>アカウント情報編集</Typography>
                <form onSubmit={submit}>
                    <Box mt={2}>
                        <InputLabel htmlFor="name" />
                        <TextField
                            label="本名"
                            fullWidth
                            disabled
                            value={data.name}
                            autoComplete="name"
                            variant="standard"
                            sx={{ mt: 1 }}
                        />
                        <InputError message={errors.name} className="mt-2" />

                        <InputLabel htmlFor="email" />
                        <TextField
                            label="メールアドレス"
                            variant="standard"
                            fullWidth
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </Box>

                    <Box mt={2}>
                        <InputLabel htmlFor="account_name" />
                        <TextField
                            label="表示名"
                            variant="standard"
                            fullWidth
                            value={data.account_name}
                            autoComplete="name"
                            onChange={(e) =>
                                setData("account_name", e.target.value)
                            }
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError
                            message={errors.account_name}
                            className="mt-2"
                        />

                        <InputLabel htmlFor="password" />
                        <TextField
                            type="password"
                            label="新しいパスワード"
                            value={data.password}
                            variant="standard"
                            fullWidth
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </Box>

                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4 }}
                        disabled={processing}
                    >
                        変更
                    </Button>
                </form>
            </Paper>
            <Footer />
        </>
    );
}
