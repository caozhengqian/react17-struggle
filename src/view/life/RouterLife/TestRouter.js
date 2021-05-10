import React from 'react';
import "./index.less";

export default class TestRouter extends React.Component {
  constructor(props) {
    console.log(`%c TestRouter-->1、constructor`, "color:#FF9797");
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state){
    console.log(`%c TestRouter-->1、getDerivedStateFromProps`, "color:#FF9797");
    return null;
  }
  componentDidMount() {
    console.log(`%c TestRouter-->1、componentDidMount`, "color:#FF9797");
  }
  shouldComponentUpdate(){
    console.log(`%c TestRouter-->1、shouldComponentUpdate`, "color:#FF9797");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c TestRouter-->1、getSnapshotBeforeUpdate`, "color:#FF9797");
    return null;
  }
  componentDidUpdate(){
    console.log(`%c TestRouter-->1、componentDidUpdate`, "color:#FF9797");
  }
  componentWillUnmount(){
    console.log(`%c TestRouter-->1、componentWillUnmount`, "color:#FF9797");
  }
  handleClick(){
    this.props.history.push({pathname: '/routerLife/TestRouter'})
  }

  render() {
    return (
        <div className="TestRouter">
          TestRouter
        </div>
    );
  }
}
