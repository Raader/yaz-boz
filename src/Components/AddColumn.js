import React,{Component} from "react";
class AddColumn extends Component{
    render(){
        return (
            <div style={{backgroundColor:"blue",float:"left",width:this.props.width + "%"}}>
                <button onClick={this.props.addColumn}>Add Column</button>
            </div>
        )
    }
}

export default AddColumn;