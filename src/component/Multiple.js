import React, { Component } from "react"

class Multiple extends Component {
    state={
        result: '',
        num1:'',
        num2:'',
        num3:'',
        num4:'',
    }
    handleonchangeNum1(e){
        const num1= e.target.value
        this.setState(prevState=>{
            return{
                num1:num1,
                num2:prevState.num2,
                num3:prevState.num3,
                num4:prevState.num4
            }
        })

    }
    handleonchangeNum2(e){
        const num2= e.target.value
        this.setState(prevState=>{
            return{
                num2:num2,
                num1:prevState.num1,
                num3:prevState.num3,
                num4:prevState.num4
            }
        })

        
    }
    handleonchangeNum3(e){
        const num3= e.target.value
        this.setState(prevState=>{
            return{
                num3:num3,
                num2:prevState.num2,
                num1:prevState.num1,
                num4:prevState.num4
            }
        })

        
    }
    handleonchangeNum4(e){
        const num4= e.target.value
        this.setState(prevState=>{
            return{
                num4:num4,
                num2:prevState.num2,
                num3:prevState.num3,
                num1:prevState.num1
            }
        })       
    }
    handleClick(event) {
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const num3 = this.state.num3;
        const num4 = this.state.num4;
        const result = parseInt(num1) * parseInt(num2)*parseInt(num3)*parseInt(num4);
        this.setState({
            'result': result
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                    <input aria-label="num1-input" type="text" onChange={this.handleonchangeNum1.bind(this)} value={this.state.num1}></input>
                    <input aria-label="num2-input" type="text" onChange={this.handleonchangeNum2.bind(this)} value={this.state.num2}></input>
                    <input aria-label="num3-input" type="text" onChange={this.handleonchangeNum3.bind(this)} value={this.state.num3}></input>
                    <input aria-label="num4-input" type="text" onChange={this.handleonchangeNum4.bind(this)} value={this.state.num4}></input>
                </div>
                <div>
                    <button aria-label="multiple-button" onClick={this.handleClick.bind(this)}>Multiple</button>
                    <b aria-label="multiple-output">{this.state.result}</b>
                </div>
            </div>
        )
    }
}
export default Multiple