import React from 'react';
import GrandSon from "./GrandSon";
//import "./index.less";

export default class Son extends React.Component {
    constructor(props) {
        console.log(`%c       Son-->1、constructor`, "color:#CE0000");
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state){
        console.log(`%c       Son-->1、getDerivedStateFromProps`, "color:#CE0000");
        return null;
    }
    componentDidMount() {
        console.log(`%c       Son-->1、componentDidMount`, "color:#CE0000");
    }
    shouldComponentUpdate(){
        console.log(`%c       Son-->1、shouldComponentUpdate`, "color:#CE0000");
    }
    getSnapshotBeforeUpdate(){
        console.log(`%c       Son-->1、getSnapshotBeforeUpdate`, "color:#CE0000");
    }
    componentDidUpdate(){
        console.log(`%c       Son-->1、componentDidUpdate`, "color:#CE0000");
    }
    componentWillUnmount(){
        console.log(`%c       Son-->1、componentWillUnmount`, "color:#CE0000");
    }
    render() {
        return (
            <div className="Son">
                Son
                <GrandSon/>
            </div>
        );
    }
}