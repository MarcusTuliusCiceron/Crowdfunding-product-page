
class Field extends React.Component{

    render(){
        const {name, value, onChange, children} = this.props
        return <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="text" value={value} onChange = {onChange} id={name} name={name} className = "form-control"></input>
        </div>
    }

}

function Checkbox ({name, value, onChange, children}){
    return <div className="form-check">
        <input type="checkbox" checked={value} onChange = {onChange} id={name} name={name} className="form-check-input"></input>
        <label className="form-check-label" htmlFor = {name}>{children}</label>
    </div>
}

class Home extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            nom: "",
            prenom: "",
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const name = e.target.name
        const type = e.target.type
        const value = type ==='checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault
        const data = JSON.stringify(this.state)
        console.log(data)
    }

    render(){
        return<form className='container' onSubmit={this.handleSubmit}>
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prenom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abbonner à la newsletter ?</Checkbox>
            <div className = "form-group">
            <button className = "btn btn-primary">Envoyer</button>
            </div>
            
            {JSON.stringify(this.state)}
        </form>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'))