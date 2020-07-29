import React,{Component} from "react";

class AddRow extends Component{
    render(){
        return(
            <div onClick={this.props.onClick} className="add-row" style={{float:"left",width:"50%"}}>
                <h1>Add Row</h1>
            </div>
        )    
    }
}

export default AddRow;