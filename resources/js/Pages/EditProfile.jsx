import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, useForm, usePage } from '@inertiajs/react';
import UpdatePasswordForm from './Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Profile/Partials/UpdateProfileInformationForm';

export default function EditProfile(mustVerifyEmail, status) {
    // TODO: ログインしていないと見られないようにする
    const user = usePage().props.auth.user;

    const { data, setData, patch, processing, errors, reset } = useForm({
        url: user.url || "",
        introduction: user.introduction || "",
        //icon: user.icon || "",
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
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
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />

                {/* TODO:パスワード確認と違うときエラーが発生する */}
                <UpdatePasswordForm/>

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