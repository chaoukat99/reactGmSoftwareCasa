class ClassComp extends Component {
    constructor(props) {
        super(props);
    }
    state = { name:"karim" }
    render() { 
        return (<h1>Hello {this.state.setState({name:"Samir"})}</h1>  );
    }
}
 
// export default ClassComp;

function ClassComp(props){
    return <h1>Hello</h1>
}

export default ClassComp;




