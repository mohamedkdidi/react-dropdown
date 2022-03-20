import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import axios from 'axios'

class UserDropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    try {
        const res = await axios.get('http://localhost:8000/user')
        const data = res.data

        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.name
        }))

        this.setState({selectOptions: options})
      } 
      catch (exception) {
        console.log(exception);
        this.setState({...this.state, isFetching: false});
      }
  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div style={{ margin: "auto", width: "300px" }} className="text-start">
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
        <br />
      </div>
    )
  }
}

export default UserDropdown;