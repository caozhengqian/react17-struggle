import React from 'react';
import "./index.less";
import Son from './Son'

export default class RouterLife extends React.Component {
  constructor(props) {
    console.log(`%c Father-->1、constructor`, "color:#FF9797");
    super(props);
    this.state = {
      aa:1
    };
  }
  static getDerivedStateFromProps(props, state){
    console.log(`%c Father-->1、getDerivedStateFromProps`, "color:#FF9797");
    return null;
  }
  componentDidMount() {
    console.log(`%c Father-->1、componentDidMount`, "color:#FF9797");
  }
  shouldComponentUpdate(){
    console.log(`%c Father-->1、shouldComponentUpdate`, "color:#FF9797");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c Father-->1、getSnapshotBeforeUpdate`, "color:#FF9797");
    return null;
  }
  componentDidUpdate(){
    console.log(`%c Father-->1、componentDidUpdate`, "color:#FF9797");
  }
  componentWillUnmount(){
    console.log(`%c Father-->1、componentWillUnmount`, "color:#FF9797");
  }
  handleClick(){
    this.props.history.push({pathname: '/routerLife/TestRouter'})
  }
  render() {
    return (
        <div className="routerLife">
          RouterLife
          <button  onClick={() => this.handleClick()}>跳转路由</button>
          <Son/>
        </div>
    );
  }
}
