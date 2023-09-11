import Cards from "@/Components/Cards";
import Header from "@/Components/Header";

export default function Projects() {
    const items = Array(50).fill({
        title: "ほげほげ",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam ducimus consectetur mollitia atque in consequuntur soluta hic, deserunt ut dolor culpa. Voluptates, a dolore aut esse ea dicta ab!",
        createdBy: "ほげ 太郎",
        currentAmount: 10000,
        goalAmount: 100000,
        numDonations: 54,
    });
    return (
        <>
            <Header />
            <Cards items={items} />
        </>
    );
}
