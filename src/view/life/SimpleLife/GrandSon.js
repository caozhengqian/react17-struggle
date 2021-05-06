import React from 'react';
//import "./index.less";

export default class GrandSon extends React.Component {
    constructor(props) {
        console.log(`%c            GrandSon-->1、constructor`, "color:#600000");
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state){
        console.log(`%c            GrandSon-->1、getDerivedStateFromProps`, "color:#600000");
        return null;
    }
    componentDidMount() {
        console.log(`%c            GrandSon-->1、componentDidMount`, "color:#600000");
    }
    shouldComponentUpdate(){
        console.log(`%c            GrandSon-->1、shouldComponentUpdate`, "color:#600000");
    }
    getSnapshotBeforeUpdate(){
        console.log(`%c            GrandSon-->1、getSnapshotBeforeUpdate`, "color:#600000");
    }
    componentDidUpdate(){
        console.log(`%c            GrandSon-->1、componentDidUpdate`, "color:#600000");
    }
    componentWillUnmount(){
        console.log(`%c            GrandSon-->1、componentWillUnmount`, "color:#600000");
    }
    render() {
        return (
            <div className="GrandSon">
                GrandSon
            </div>
        );
    }
}