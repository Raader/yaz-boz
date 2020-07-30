import React,{Component} from "react";
import {Button} from "reactstrap";
class AddRow extends Component{
    render(){
        return(
            <div style={{float:"left",width:"50%",marginTop:"0.2cm",marginBottom:"0.2cm"}}>
                <Button onClick={this.props.onClick} color="secondary" size="lg">Add Row</Button>
                <Button style={{margin:"0.1cm"}}size="lg"color="secondary"onClick={() =>this.props.deleteRow()}>Delete Row</Button>
            </div>
        )    
    }
}

export default AddRow;