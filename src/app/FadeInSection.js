import "./FadeInSection.css";
import { useEffect, useRef, useState } from "react";

function FadeInSection(props){
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
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