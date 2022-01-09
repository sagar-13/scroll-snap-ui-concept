import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import "./App.css";

function Section({num, updateIndicator, setExpanded, isExpanded}) {
    const {ref, inView, entry} = useInView({ /* Optional options */
        rootMargin: "-100px"
    });

    useEffect(() => {
        if (inView) 
            updateIndicator(num);
        


        setExpanded(false);
    }, [inView]);
    return (
        <section ref={ref}>
            <div onClick={
                    () => {
                        setExpanded(!isExpanded);
                    }
                }
                className={
                    `${
                        inView ? "animate num" : "num"
                    } ${
                        isExpanded ? "bigView" : ""
                    }`
            }>
                Section {num}
                <br/>
                <h2>
                    Section in viewport:
                    <strong>{
                        `${inView}`
                    }</strong>
                </h2>
                {
                isExpanded && (
                    <>
                        <img src="https://picsum.photos/300/300" alt="random pic"/>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing                                                                                                                                                                       elit. Voluptate, illo.
                        </p>
                    </>
                )
            } </div>
        </section>
    );
}

export default Section;
