import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        console.log("upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted in to upper case","sucess");

    }
    const handlUpClick=()=>{
        console.log("upper case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted in to lower case","sucess");
    }
    const handleclrClick=()=>{
        console.log("upper case was clicked" + text);
        let newText=``;
        setText(newText)
        props.showAlert("Text is clear","sucess");
        
    }
    const handleOnChange=(event)=>{
        console.log("on change");    
        setText(event.target.value)
    }
    const handleCopy=()=>{
        // console.log("I am Copy");
        // var text=document.getElementById("myBox");
        // text.select();
     navigator.clipboard.writeText(text);
            // document.getSelection().removeAllRanges();  
        props.showAlert("The text is coppied","sucess");
    }
    const [text, setText] = useState('Enter text Here');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'darkgrey':'white',color:props.mode==='dark'?'white':'black'  }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-1 my-1" onClick={handlUpClick}>Convert to lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-1 my-1" onClick={handleclrClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary m-1 my-1" onClick={handleCopy}>Copy text</button>
            
        </div>
        <div className="conrainer my-2" style={{color:props.mode==='dark'?'white':'black' }}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and{text.length}characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
