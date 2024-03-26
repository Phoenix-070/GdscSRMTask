marked.setOptions({
    breaks: true
})
const renderer = new marked.Renderer();




function App(){
    const [text, setText] = React.useState("");

    // Function to handle bold formatting
    const handleBold = () => {
        setText(text + "**bold text**");
    };

    // Function to handle italic formatting
    const handleItalic = () => {
        setText(text + "_italic text_");
    };
    const handleImage = () => {
        setText(text + "![alt text](image-url)");
    };
    // Function to insert a link tag
    const handleLink = () => {
        setText(text + "[link text](url)");
    };

    // Function to insert a code block
    const handleCodeBlock = () => {
        setText(text + "\n```\n// Your code here\n```\n");
    };

    // Function to insert a header
    const handleHeader = () => {
        setText(text + "\n## Header");
    };
    
    
    return(
        <div className="text-clearInterval.px-4">
            <h1 className="p-4">Quick Markdown Previewer</h1>
            {/* Toolbar */}
           <div className="toolbar">
                <button onClick={handleBold}>Bold</button>
                <button onClick={handleItalic}>Italic</button>
                <button onClick={handleImage}>Image</button>
                <button onClick={handleLink}>Link</button>
                <button onClick={handleCodeBlock}>Code Block</button>
                <button onClick={handleHeader}>Header</button>
            </div>
            <textarea name="text" id="text" rows="10" value={text} onChange={(e) => setText(e.target.value)}
            className="textarea"></textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text}/>
        </div>
    );
}

function Preview({markdown}){
    return(
        <div
        
        dangerouslySetInnerHTML ={{__html: marked(markdown, {renderer: renderer}),
        }} id="preview">

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));