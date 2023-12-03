//  TODO:  create clean and reusable component 
import { createContext, useContext } from "react"
import { useToggle } from "../hooks/useToggle";
import {FaChevronDown, FaChevronRight} from "react-icons/fa"


// Create contextAPI 
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
    const { title, content } = props
    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    const value = {
        expand,
        toggleExpand
    }

    return (
        <Provider value={value}>
            <div className="accordion">
                <AccordionHeader>{title}</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
            </div>
        </Provider>
    )
}

// Header 

const AccordionHeader = ({ children }) => {
    const { expand, toggleExpand } = useContext(AccordionContext)
    return (
        <button onClick={toggleExpand}>
            {children} <AccordionIcon 
                iconOpened ={<FaChevronRight />}
                iconClosed = {<FaChevronDown />}
            />
        </button>
    )
}

// Content
const AccordionContent = ({ children }) => {
    const { expand } = useContext(AccordionContext)

    return (
        <>
            {expand && <div className="content">{children} </div>}
        </>

    )
}
// Icon
const AccordionIcon = ({iconOpened, iconClosed}) =>{
    const { expand } = useContext(AccordionContext)
    return <span>{expand ? iconOpened : iconClosed}</span>
}