import React from "react";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

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

    return (
        <>
            <Header loginAndRegister auth={auth}/>
            <Cards items={items} />
            <Footer />
        </>
    );
}
