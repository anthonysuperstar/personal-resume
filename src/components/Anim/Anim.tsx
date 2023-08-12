import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Anim() {
    const [job, setJob] = useState(0);

    useEffect(() => {
        let counter = 0;
        const intervalId = setInterval(() => {
            setJob(prevJob => (prevJob + (counter % 2 === 0 ? 3 : 1)) % 3);
            counter++;
        }, 2500);
    
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {job === 0 ? "Job A" : job === 1 ? "Job B" : "Job C"}
            </motion.div>
        </div>
    );
};