import React from "react";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import ScrollToTop from "@/Components/ScrollToTop";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DonatedProjects(props) {
    const { projects, auth } = props;

    const items = projects.map((project) => ({
        title: project.title,
        content:
            project.description.replace(/\n/g, "<br />").slice(0, 80) + "...",
        createdBy: project.userName,
        currentAmount: project.currentAmount,
        goalAmount: project.goal_amount,
        numDonations: project.numDonations,
        id: project.id,
        deadline: project.deadline,
    }));

    const submit = (e) => {
        e.preventDefault();

        post(route("project.search"));
    };
    const { data, setData, post, processing, errors, reset } = useForm({
        keyword: "",
    });

    const [search, setSearch] = useState("");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header auth={auth} />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 4,
                    pb: 2,
                    gap: 0.5,
                }}
            >
                <FavoriteIcon fontSize="large" color="primary" />
                <Typography variant="h5">支援したプロジェクト一覧</Typography>
            </Box>
            <form onSubmit={submit}>
                <Box
                    sx={{
                        px: 4,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="検索"
                        variant="outlined"
                        value={search}
                        required
                        onChange={(e) => setSearch(e.target.value)}
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        disabled={processing}
                        onClick={(e) => {
                            console.log("keyword", data);
                            setData("keyword", search);
                        }}
                        sx={{ height: "100%" }}
                    >
                        検索する
                    </Button>
                </Box>
            </form>
            <Cards items={items} />
            <Footer />
            <ScrollToTop />
        </Box>
    );
}
