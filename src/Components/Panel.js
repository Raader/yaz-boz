import React,{Component} from "react";
import Column from "./Column"
import AddColumn from "./AddColumn";
import *as uuid from "uuid";
import AddRow from "./AddRow";
import {Alert} from "reactstrap";
class Panel extends Component{
    constructor(props){
        super(props);
        this.state = {
            colCount: 1,
            columns:[{id:uuid.v4(),fields:[]},{id:uuid.v4(),fields:[]}]
        }
    }
   
    render(){
        const columnSize = 100/(this.state.columns.length);
        const columns = this.state.columns.map((column,c) =><Column panel={this}index={c} fields={column.fields} id={column.id} width={columnSize}deleteColumn={(id) =>{
            this.setState({columns:this.state.columns.filter((value,index,array)=>{
                
                if(value.id === id){
                    
                    return false;
                }
                return true;
            })},
            () =>{  
                console.log(this.state.columns);
            });
        }
        }></Column>)
        return [columns,<AddColumn addColumn = {() => {
            const nArr = this.state.columns;
            let fs = [];
            if(this.state.columns[0]){
                for(let i = 0; i < this.state.columns[0].fields.length;i++){
                    fs.push("");
                }
            }
            nArr.push({id:uuid.v4(),fields:fs});
            this.setState({columns:nArr});
        }}width={columnSize}></AddColumn>,
        <AddRow onClick={() =>{
            this.state.columns.forEach(element => {
            element.fields.push("");
            });
            this.setState({columns:this.state.columns});
            }}></AddRow>];
    }
}

export default Panel;