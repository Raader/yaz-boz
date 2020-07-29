import React,{Component} from "react";
import {Input} from "reactstrap";
class Field extends Component{
    componentDidMount(){
        this.input.value = this.props.num;
    }
    componentDidUpdate(){
        if(this.input.value !== this.props.num){
            this.input.value = this.props.num;
        }
    }
    render(){      
        return(
            <div className="field">
                <input className="form-control"type="number"ref={ref => this.input = ref} onInput={
                    () =>{
                        console.log(this.input.value);
                        this.props.onInput(this.input.value,this.props.index)
                    }
                }></input>
            </div>
        )    
    }
}

export default Field;