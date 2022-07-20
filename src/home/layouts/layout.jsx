import { Component } from 'react';
import Footer from './footer';
import Header from './header';

export class LayoutScaffold extends Component{
    constructor(props){
        super(props);
        this.children = this.props.children;
        this.marginTop = this.props.marginTop;
        this.homeHeader = this.props.homeHeader;
    }
    render(){
        return <div>
            <Header/>
            {this.homeHeader != null ? this.homeHeader : null}
            <main id='main' style={{marginTop: this.marginTop != null ? this.marginTop : '0px'}}>
                {this.props.children}
            </main>
            <Footer/>
        </div>;
    }
}

class ScaffoldState extends Component{
    constructor(props){
        super(props);
        this.child = this.props.child;
        this.variables = this.props.variables;
        this.state = this.variables;
        this.setState = this.setState.bind(this);
    }

    setState(variables){
        this.state = {...this.variables};
    }

    render(){
        return this.child;
    }


}
