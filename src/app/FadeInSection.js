import "./FadeInSection.css";
import { useEffect, useRef, useState } from "react";

function FadeInSection(props){
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const cur = domRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(cur);
        return () => observer.unobserve(cur);
    }, []);

    return (
        <div
            className={`fade_in_section ${props.fade_direction} ${isVisible ? "is_visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;