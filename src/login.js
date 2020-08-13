function Login2(){
  return(
    <div>
    <Input/>
    <Button onClick = { () => alert("Button OK")}> login! </Button>
    </div>
  )
}

class Login extends React.Component{

  constructor(){
    super()
    this.state = {id : "No ID"}
  }

  render(){
    return(
      <div>
      <Input onChange = { (e) => this.setState({id: e.target.value }) }/>
      <Button value = {this.state.id} onClick = { (event) => alert(this.state.id)}> login! </Button>
      </div>
    )
  }
}
