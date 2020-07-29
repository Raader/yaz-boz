import React,{Component} from "react";

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
                <input type="number"ref={ref => this.input = ref} onInput={
                    () =>{
                        this.props.onInput(this.input.value,this.props.index)
                    }
                }></input>
            </div>
        )    
    }
}

export default Field;