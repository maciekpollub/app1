/**
 * Created by maciej on 12.12.17.
 */
import React, {Component} from 'react'
import {render} from 'react-dom'
import 'whatwg-fetch'


class ContactsAppContainer extends Component {
    constructor(){
        super();
        this.state={
            contacts: []
        };
    }

    componentDidMount(){
        fetch('./contacts.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({contacts: responseData});
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
    render(){
        return(
            <ContactsApp contacts={this.state.contacts} />
        );
    }

}




class ContactsApp extends Component {
    constructor(props){
        super(props);
        this.state={
            filterText: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(phraseSearched){
        this.setState({filterText: phraseSearched})
    }

    render(){
        return(
            <div>
            <SearchBar filterText={this.state.filterText}
                       userInput={this.handleUserInput}/>
            <ContactList contacts={this.props.contacts}
                         filterText={this.state.filterText}/>
            </div>
        )
    }
}

class SearchBar extends Component {

    handleChange(event){
        this.props.userInput(event.target.value);
    }
    render(){
        return(
            <input type="search"
                   placeholder="search for sth..."
                   value={this.props.filterText}
                   onChange={this.handleChange.bind(this)}/>
        )
    }
}

class ContactList extends Component {
    render(){
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1);
        return(
            <ul>
                {filteredContacts.map(
                    (contact) => <ContactItem key={contact.email}
                                                name={contact.name}
                                                email={contact.email} />
                )}
            </ul>
        )
    }
}

class ContactItem extends Component {
    render(){
        return(
            <li>{this.props.name} - {this.props.email}</li>
        )
    }
}


/*let contacts=[
    {name: "Casio Zen", email: 'cassiozen@gmail.com'},
    {name: "Dan Abramov", email: 'gearon@somewhere.com'},
    {name: "Pete Hunt", email: 'floydophone@somewhere.com'},
    {name: "Paul O'Shannessy", email: 'zpao@somewhere.com'},
    {name: "Ryan Florence", email: 'rpflorence@somewhere.com'},
    {name: "Sebastian Markbage", email: 'sebmarkbage@here.com'},
];*/

render(<ContactsAppContainer/>, document.getElementById("root"));