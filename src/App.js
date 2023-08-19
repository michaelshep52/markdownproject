import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';
import React from 'react';
const markdown=`    
# H1
## H2
\
[title](https://www.example.com)

\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`;
  

export default class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    markdown};
}
updateMarkdown(markdown) {
  this.setState({ markdown });
}
render(){
  var inputStyle = {
    width: "100%",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  };
  var outputStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    border: "2px solid black"
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              {""}
            <Badge className="text-align-center" variant="light">
                Markdown Previewer
            </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            {""}
            <div className="col text-center">
              <h3>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h3>
            </div>
            <div className="mark-input" style={inputStyle}>
              <textarea id="editor"
                className="input" 
                style={inputStyle} 
                value={this.state.markdown}
                onChange={(event) => {
                  this.updateMarkdown(event.target.value);
                }} 
              >
              </textarea>
            </div>
          </div>
          <div className="col-md-6">
            {""}
            <div className="col text-center">
              <h3>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
              </h3>
            </div>
            <div 
              id="preview"
              style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(this.state.markdown),
              }}
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
}




 
