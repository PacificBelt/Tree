import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        account_name: user.account_name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section>
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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            あなたのメールアドレスは未確認です。
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                確認メールを再送信するにはこちらをクリックしてください。
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                               新しい確認リンクがあなたのメールアドレスに送信されました。
                            </div>
                        )}
                    </div>
                )}

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

                    <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">更新成功.</p>
                </Transition>
            </form>
        </section>
    );
}
