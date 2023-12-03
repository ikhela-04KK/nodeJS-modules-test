import Editale from "./Editable"
import  Accordion from "./Accordion" 



export default function App(){
    return (
    <div className="App">
        <h1>Hello CodeSandbox</h1>
            <Accordion title ="Product Info" content="This is prdoduct info content" />
            <br />
            <Editale />
    </div>
    
    )
}