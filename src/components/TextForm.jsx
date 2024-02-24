import { useState } from "react"

export default function TextForm(props){
    const [text,setText] = useState("")

    function handleUpClick(){
        let newText = text.toUpperCase()
        setText(newText)
        props.alert("Converted to UpperCase","success")
    }
    function handleLoClick(){
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleCopyText = ()=>{
        let newText = document.getElementById("my-box")
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }
    const handleClearText = ()=>{
        setText('')
    }
    function handleOnchange(event){
        setText(event.target.value)
    }
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark' ? "white" : "#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode === 'dark' ? "#042743" : "white",color : props.mode === 'dark' ? "white" : "#042743"}} id="my-box" rows="8"></textarea>
            </div>
            <button type="button" disabled={text.length <= 0}  onClick={handleUpClick} className="btn btn-primary mx-1 my-1" >Convert to UpperCase</button>
            <button type="button" disabled={text.length <= 0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
            <button type="button" disabled={text.length <= 0} onClick={handleCopyText} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button type="button" disabled={text.length <= 0} onClick={handleClearText} className="btn btn-primary mx-1 my-1">Clear Text</button>
        </div>
            <div className="container mb-3" style={{color : props.mode === 'dark' ? "white" : "#042743"}}>
                <h2>Your text summery</h2>
                <p>{text.split(" ").filter((element)=>{return element.length > 0}).length} Words and {text.length} components </p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter Something in the text box to preview it here"}</p>
            </div>
        
        </>
    )
}