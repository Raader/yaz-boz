import React,{Component} from "react";
class AddColumn extends Component{
    render(){
        return (
            <div onClick={this.props.addColumn} className="add-column"style={{float:"left",width:"50%"}}>
                <h1>Add Column</h1>
            </div>
        )
    }
}

export default AddColumn;