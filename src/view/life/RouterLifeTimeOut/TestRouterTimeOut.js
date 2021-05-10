import React from 'react';
import "./index.less";
import {home} from '../../../api/request'

export default class TestRouterTimeOut extends React.Component {
  constructor(props) {
    console.log(`%c TestRouterTimeOut-->1、constructor`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->1、constructor`, "color:#FF9797");
    });
    super(props);
    this.state = {
      testData:0
    };
  }
  static getDerivedStateFromProps(props, state){
    console.log(`%c TestRouterTimeOut-->1、getDerivedStateFromProps`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->2、getDerivedStateFromProps`, "color:#FF9797");
    });
    return null;
  }
  componentDidMount() {
    console.log(`%c TestRouterTimeOut-->1、componentDidMount`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->2、componentDidMount`, "color:#FF9797");
    });
  }
  shouldComponentUpdate(){
    console.log(`%c TestRouterTimeOut-->1、shouldComponentUpdate`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->2、shouldComponentUpdate`, "color:#FF9797");
    });
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c TestRouterTimeOut-->1、getSnapshotBeforeUpdate`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->2、getSnapshotBeforeUpdate`, "color:#FF9797");
    });
    return null;
  }
  componentDidUpdate(){
    console.log(`%c TestRouterTimeOut-->1、componentDidUpdate`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->2、componentDidUpdate`, "color:#FF9797");
    });
  }
  componentWillUnmount(){
    console.log(`%c TestRouterTimeOut-->1、componentWillUnmount`, "color:#FF9797");
    home(2000).then(() => {
      console.log( `%c延迟TestRouterTimeOut的生命周期-->2、componentWillUnmount`, "color:#FF9797");
    });
  }
  handleClick(){
    this.setState({testData:this.state.testData+1})
  }
  render() {
    return (
        <div className="TestRouterTimeOut">
          TestRouterTimeOut1
          <button  onClick={() => this.handleClick()}>使组件更新</button><br/><br/><br/>
          <span className='red'>延迟的打印有重复</span><br/>
          constructor、getDerivedStateFromProps 执行<span className='red'>两次</span><br/>
          componentDidMount 执行<span className='red'>一次</span><br/>
          更新的时候<br/>
          getDerivedStateFromProps、shouldComponentUpdate 执行<span className='red'>两次</span><br/>
          getSnapshotBeforeUpdate、componentDidUpdate 执行<span className='red'>一次</span><br/>
          卸载的时候<br/>
          componentWillUnmount 执行<span className='red'>一次</span><br/>
        </div>
    );
  }
}
