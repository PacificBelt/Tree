import React, { useEffect, useState } from "react";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { grey } from '@mui/material/colors';

//tailwind css
import '../../css/Tailwind.css';

const ScrollToTop = () => {
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setDisplay(window.scrollY > 400);
        });
    }, []);
    return (
        <>
            {display && (
                <div className="fixed right-[5%] bottom-40 w-8 h-8 bg-darkgreen flex items-center justify-center rounded-full">
                    <a href="#home">
                        <VerticalAlignTopIcon sx={{ color:grey[50] }} />
                    </a>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
