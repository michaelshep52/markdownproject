import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';
import React from 'react';
const markdown=`    
# Heading level 1
## Heading level 2
### Heading level 3

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>

1. First item
2. Second item
3. Third item
4. Fourth item
* First item
* Second item
* Third item
* Fourth item

> blockquote
>> blockquote in a blockquote

[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

**bold text**
I just love __bold text__.
Love**is**bold

This is the first line  

And this is the second line..  


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
    padding: "0",
  };
  var outputStyle = {
    width: "100%",
    height: "90%",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    border: "2px solid black"
  };

  return (
    <div className="App" class="bg-info">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col text-center">
            <h1>
              {""}
            <Badge className="text-align-center mt-4 bg-secondary" variant="light">
                Markdown Previewer
            </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-7 shadow-lg">
            {""}
            <div className="col text-center">
              <h3>
                <Badge className="text-align-center mt-4 bg-secondary" variant="secondary">
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
          <div className="col-10 mt-4 shadow-lg">
            {""}
            <div className="text-center mt-4">
              <h3>
                <Badge className="text-align-center bg-secondary" variant="secondary">
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




 
