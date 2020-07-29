import React,{Component} from "react";

class AddRow extends Component{
    render(){
        return(
            <div style={{width:"100%"}}>
                <button onClick={this.props.onClick}>Add Row</button>
            </div>
        )    
    }
}

export default AddRow;