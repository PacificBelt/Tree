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
                    <Box mt={6}>
                        <Typography variant={"h6"}>基本情報</Typography>
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
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4 }}
                        disabled={processing}
                    >
                        保存
                    </Button>
                </form>

                <form onSubmit={submit}>
                    <Box mt={6}>
                        <Typography variant={"h6"}>パスワード</Typography>
                        <InputLabel htmlFor="current_password" />
                        <TextField
                            type="password"
                            label="現在のパスワード"
                            value={data.password}
                            variant="standard"
                            fullWidth
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError
                            message={errors.current_password}
                            className="mt-2"
                        />

                        <InputLabel htmlFor="new_password" />
                        <TextField
                            type="password"
                            label="新しいパスワード"
                            value={data.password}
                            variant="standard"
                            fullWidth
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("new_password", e.target.value)
                            }
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError
                            message={errors.new_password}
                            className="mt-2"
                        />

                        <InputLabel htmlFor="new_password_confirm" />
                        <TextField
                            type="password"
                            label="新しいパスワード (確認)"
                            value={data.password}
                            variant="standard"
                            fullWidth
                            autoComplete="new-password-confirm"
                            onChange={(e) =>
                                setData("new_password_confirm", e.target.value)
                            }
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError
                            message={errors.new_password}
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
                        保存
                    </Button>
                </form>

                <form onSubmit={submit}>
                    <Box mt={6}>
                        <Typography variant={"h6"}>その他情報</Typography>
                        <InputLabel htmlFor="description" />
                        <TextField
                            label="紹介文"
                            variant="standard"
                            fullWidth
                            value={data.description}
                            autoComplete="name"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                            multiline
                            rows={4}
                            sx={{ mt: 1 }}
                        />
                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />

                        <InputLabel htmlFor="url" />
                        <TextField
                            label="ソーシャルメディア等のURL"
                            variant="standard"
                            fullWidth
                            value={data.url}
                            autoComplete="url"
                            onChange={(e) => setData("url", e.target.value)}
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError message={errors.url} className="mt-2" />
                    </Box>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4 }}
                        disabled={processing}
                    >
                        保存
                    </Button>
                </form>
            </Paper>
        </>
    );
}
