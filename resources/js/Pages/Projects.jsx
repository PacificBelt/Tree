import React from "react";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Projects(props) {
    const { projects } = props;

    const items = projects.map((project) => ({
        title: project.title,
        content:
            project.description.replace(/\n/g, "<br />").slice(0, 100) + "...",
        createdBy: project.userName, // ここは後で置き換え
        currentAmount: project.currentAmount, // ここは後で現在の金額に置き換え
        goalAmount: project.goal_amount,
        numDonations: project.numDonations, // ここは後で実際の寄付数に置き換え
        id: project.id,
    }));

    return (
        <>
            <Header />
            <Cards items={items} />
            <Footer />
        </>
    );
}