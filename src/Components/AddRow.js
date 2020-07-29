import React,{Component} from "react";
import {Button} from "reactstrap";
class AddRow extends Component{
    render(){
        return(
            <div style={{float:"left",width:"50%",marginTop:"0.2cm"}}>
                <Button onClick={this.props.onClick} color="secondary" size="lg">Add Row</Button>
            </div>
        )    
    }
}

export default AddRow;