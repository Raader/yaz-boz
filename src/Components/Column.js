import React,{Component} from "react";
import Field from "./Field";
import Row from "./Row";
import {Button,Input} from "reactstrap";
class Column extends Component{
    constructor(props){
        super(props);
        this.state = {
            sum:0
        }
    }

    count = () =>{
        let sum = 0;
        for(let num of this.props.panel.state.columns[this.props.index].fields){
            sum += Number(num);
        }
        this.setState({sum:sum});
    
    }
    render(){
        return (<div className="column" style={{float:"left",width:this.props.width + "%"}}>
            <div>
                <Button color="secondary"onClick={() =>this.props.deleteColumn(this.props.id)}>Delete Column</Button>
                <Input type="text" placeholder="name"></Input>
            </div>      
            {this.props.fields.map((field,c) =><Field index={c}num={field} onInput ={(val,i)=>{
                this.props.panel.state.columns[this.props.index].fields[i] = val;
                this.props.panel.setState({columns:this.props.panel.state.columns});
                this.count();
            }}></Field>)}
            <h2 style={{margin:"auto"}}>{this.state.sum}</h2>
        </div>);
    }
}

export default Column;