import React from "react";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ScrollToTop from "@/Components/ScrollToTop";

export default function Projects(props) {
    const { projects } = props;

    const items = projects.map((project) => ({
        title: project.title,
        content:
            project.description.replace(/\n/g, "<br />").slice(0, 100) + "...",
        createdBy: project.userName,
        currentAmount: project.currentAmount,
        goalAmount: project.goal_amount,
        numDonations: project.numDonations,
        id: project.id,
    }));

    return (
        <>
            <Header />
            <Cards items={items} />
            <Footer />
            <ScrollToTop />
        </>
    );
}
