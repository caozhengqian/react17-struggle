import React from 'react';
import "./index.less";
import GrandSon from './GrandSon'
import {home} from '../../../api/request'

export default class Son extends React.Component {
  constructor(props) {
    console.log(`%c       Son-->1、constructor`, "color:#CE0000");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state){
    console.log(`%c       Son-->2、getDerivedStateFromProps`, "color:#CE0000");
    return null;
  }
 async componentDidMount() {
    console.log(`%c       Son-->3、componentDidMount`, "color:#CE0000");
    await  home(2000).then(() => {
      console.log( `%c111延迟Son的生命周期-->1、componentDidMount`, "color:#FF9797");
    });
   console.log(`%c       延迟后Son-->3、componentDidMount`, "color:#CE0000");
  }
  shouldComponentUpdate(){
    console.log(`%c       Son-->4、shouldComponentUpdate`, "color:#CE0000");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c       Son-->5、getSnapshotBeforeUpdate`, "color:#CE0000");
    return null;
  }
  componentDidUpdate(){
    console.log(`%c       Son-->6、componentDidUpdate`, "color:#CE0000");
  }
  componentWillUnmount(){
    console.log(`%c       Son-->7、componentWillUnmount`, "color:#CE0000");
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
