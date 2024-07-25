import { useState } from "react"
import Typography from "./Typography";
import { ArrowIcon } from "./Icons";


interface IAccordionProps {
    title: string;
    accordionSummary: React.ReactNode;
}

export const Accordion = ({title,accordionSummary}:IAccordionProps) => {
    const [show,setShow] = useState(false);
    return (
        <div className="w-full flex flex-col">
            <div className="flex justify-between items-center cursor-pointer h-[51px] py-4">
                <Typography variant="h5" className="text-gray-600" onClick={() => setShow((show) => !show)}>{title}</Typography>
                <span
                    className={`block ${show ? 'rotate-180' : "rotate-0"} transition duration-500 ease-in-out`}
                    onClick={() => setShow((show) => !show)}
                ><ArrowIcon /></span>
            </div>
            <div className={`${show ? 'block' : "hidden"}`}>
                {accordionSummary}
            </div>
        </div>
    )
}