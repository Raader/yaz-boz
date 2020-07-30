import React,{Component} from "react";
import {Button} from "reactstrap";
class AddColumn extends Component{
    render(){
        return (
            <div style={{float:"left",width:"50%",marginTop:"0.2cm",marginBottom:"0.2cm"}}>
                <Button size="lg"onClick={this.props.addColumn}>Add Column</Button>
                <Button style={{margin:"0.1cm"}}size="lg"color="secondary"onClick={() =>this.props.deleteColumn()}>Delete Column</Button>
            </div>
        )
    }
}

export default AddColumn;