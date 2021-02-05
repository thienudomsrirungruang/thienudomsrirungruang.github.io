function Paragraphize(props){
    var paragraphs = [];
    var split_str = props.content.split("\n");
    split_str.forEach(paragraph => {
        paragraphs.push(<p>{paragraph}</p>);
    })
    return paragraphs;
}

export default Paragraphize;