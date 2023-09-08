import React, { Component } from 'react'

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            type:"sent"
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.toggleBtn = this.toggleBtn.bind(this);
    }


    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    submit() {
        this.props.handleSubmit(this.state.input, this.state.type);
        console.log( this.state.type);
        console.log( this.state.input);
        this.setState({
            input: ''
        })
    }
    toggleBtn() {
        if(this.state.type !== "sent"){
          this.setState({type:"sent"})
          console.log("hi 2")
        }else{
          this.setState({type:"recive"})
          console.log("hi 3")
        }
      }

    render() {
        return (
            <div className="panel-footer">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.input} onChange={this.handleChange} placeholder="Say something" />
                        <button className="btn btn-primary" type="button" onClick={this.submit}>Send</button>
                        
                        <button 
                            onClick={this.toggleBtn}
                            className="btn">
                            {this.state.type==="sent" ? "right" : 'left'}
                         </button>
                    </div>
                </form>
            </div>
        )
    }
}
