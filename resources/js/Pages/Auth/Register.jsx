import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import { useEffect } from 'react';
// import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
import { Head, useForm, usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function Register() {
    const auth = usePage().props.auth;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        account_name: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Box sx={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header auth={auth} />
            <Paper
                sx={{
                    p: 4,
                    width: "500px",
                    m: "30px auto",
                }}
            >
                <Typography variant={"h5"}>新規登録</Typography>
                <form onSubmit={submit}>
                    <Box mt={2}>
                        <InputLabel htmlFor="name" />
                        <TextField
                            label="本名"
                            fullWidth
                            required
                            value={data.name}
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
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
                            onChange={(e) => setData('email', e.target.value)}
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
                            onChange={(e) => setData('account_name', e.target.value)}
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError message={errors.account_name} className="mt-2" />

                        <InputLabel htmlFor="password" />
                        <TextField
                            type="password"
                            label="パスワード"
                            value={data.password}
                            variant="standard"
                            fullWidth
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError message={errors.password} className="mt-2" />

                        <InputLabel htmlFor="password_confirmation" />
                        <TextField
                            type="password"
                            label="パスワード(確認)"
                            value={data.password_confirmation}
                            variant="standard"
                            fullWidth
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                            sx={{ mt: 1 }}
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </Box>

                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 4 }}
                        disabled={processing}
                    >
                        登録
                    </Button>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="caption">
                            すでにアカウントをお持ちの方は
                            <Link href="login">ログイン</Link>
                        </Typography>
                    </Box>
                </form>
            </Paper>
            <Box sx={{flexGrow:1}}></Box>
            <Footer />
        </Box>
    );
}
