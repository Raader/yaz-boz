import React,{Component} from "react";
import {Button} from "reactstrap";
class AddColumn extends Component{
    render(){
        return (
            <div style={{float:"left",width:"50%",marginTop:"0.2cm"}}>
                <Button size="lg"onClick={this.props.addColumn}>Add Column</Button>
            </div>
        )
    }
}

export default AddColumn;