import React, { Component } from "react";
import './App.css';
import Main from './components/main.js';
import Layout from './components/layout.js';


class App extends Component {

    render(props) {
        return (
            <div className="skeleton">           
                <Layout>
                <Main />
                </Layout>
            </div >                   
        );
    }
}
export default App;
