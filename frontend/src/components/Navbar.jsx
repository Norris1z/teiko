import React , { Component } from 'react';
import { Navbar as NavB, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { changeLanguage, changeTheme } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Navbar extends Component{

    setSelectedLanguage(language) {
        this.props.changeLanguage(language);
    }

    renderLanguages() {
        let languages = ['C++','Rust'];
        return languages.map(each=>{
            return <MenuItem key={Math.random()} onClick={()=>this.setSelectedLanguage(each)}>{each}</MenuItem>
        });
    }

    setSelectedTheme(theme) {
        this.props.changeTheme(theme);
    }

    renderThemes() {
        let themes = ['Material','Ambiance','Dracula','Cobalt'];
        return themes.map(each=>{
            return <MenuItem key={Math.random()} onClick={()=>this.setSelectedTheme(each)}>{each}</MenuItem>
        })
    }

    render(){
        return(
            <NavB>
                <NavB.Header>
                    <NavB.Brand>
                        <a style={{fontSize: 3+'em'}}>Teiko</a>
                    </NavB.Brand>
                </NavB.Header>
                <Nav className="pull-right">
                    <NavDropdown title="Languages" id="basic-nav-dropdown">
                        {this.renderLanguages()}
                    </NavDropdown>
                </Nav>
                <Nav className="pull-right">
                    <NavDropdown title="Themes" id="basic-nav-dropdown">
                        {this.renderThemes()}
                    </NavDropdown>
                </Nav>
            </NavB>            
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeLanguage,changeTheme},dispatch);
}

function mapStateToProps(state) {
    return Object.assign({},state,{
        language: state.language,
        theme: state.theme
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);