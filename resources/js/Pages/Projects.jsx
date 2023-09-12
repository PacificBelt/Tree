import React from "react";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import ScrollToTop from "@/Components/ScrollToTop";

export default function Projects(props) {
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
        <>
            <Header loginAndRegister auth={auth} />
            <form onSubmit={submit}>
                <TextField
                    label="検索"
                    variant="outlined"
                    // value={data.keyword}
                    value={search}
                    required
                    onChange={(e) => setSearch(e.target.value)}
                    // onChange={(e) => setData("keyword", e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    disabled={processing}
                    onClick={(e) => {
                        console.log("keyword", data);
                        setData("keyword", search);
                    }}
                >
                    検索する
                </Button>
            </form>
            <Cards items={items} />
            <Footer />
            <ScrollToTop />
        </>
    );
}
