import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';
import { Head, useForm } from '@inertiajs/react';

import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Paper
            sx={{
                p: 4,
                width: "500px",
                m: "30px auto",
            }}
        >
            <Typography variant={"h5"}>ログイン</Typography>
            <Box mt={2}>
                <TextField
                    label="メールアドレス"
                    variant="standard"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                    onChange={(e) => setData('email', e.target.value)}
                />
                <TextField
                    type="password"
                    label="パスワード"
                    variant="standard"
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                    onChange={(e) => setData('password', e.target.value)}
                />
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
                    パスワードを忘れた方はこちら
                    <Link href={route('password.request')}>ログイン</Link>
                </Typography>
            </Box>
        </Paper>

        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="block mt-4">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) => setData('remember', e.target.checked)}
        //                 />
        //                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
        //             </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <PrimaryButton className="ml-4" disabled={processing}>
        //                 Log in
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
    );
}
