import {useState} from "react";
import Section from "./section";
import "./App.css";

function App() {
    const [indicator, setIndicator] = useState("one");

    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className={
            `App ${
                isExpanded ? "overflow-hidden" : "overflow-scroll"
            }`
        }>
            {
            ["one", "two", "three", "four"].map((num) => (
                <Section key={num}
                    num={num}
                    isExpanded={isExpanded}
                    updateIndicator={
                        x => setIndicator(x)
                    }
                    setExpanded={
                        (x) => setExpanded(x)
                    }/>
            ))
        }

            <div className="indicator">
                {
                ["one", "two", "three", "four"].map((x) => (
                    <div key={x}
                        className={
                            indicator === x ? "active vl" : "vl"
                    }></div>
                ))
            } </div>
        </div>
    );
}

export default App;
