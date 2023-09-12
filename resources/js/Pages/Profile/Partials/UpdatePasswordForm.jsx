import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section>
            <form onSubmit={updatePassword} >
                <Box mt={6}>
                    <Typography variant={"h6"}>パスワード</Typography>
                    <InputLabel htmlFor="current_password" />
                    <TextField
                        type="password"
                        label="現在のパスワード"
                        value={data.current_password}
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
                        message={errors.new_password}
                        className="mt-2"
                    />

                    <InputLabel htmlFor="password_confirmation" />
                    <TextField
                        type="password"
                        label="新しいパスワード (確認)"
                        value={data.password_confirmation}
                        variant="standard"
                        fullWidth
                        autoComplete="new-password-confirm"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
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
