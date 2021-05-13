import React from 'react';
import "./index.less";
import {home} from '../../../api/request'
import Son from './Son'

export default class StopLife extends React.Component {
  constructor(props) {
    console.log(`%c Father-->1、constructor`, "color:#FF9797");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state){
    console.log(`%c Father-->1、getDerivedStateFromProps`, "color:#FF9797");
    return null;
  }
  async componentDidMount() {
    console.log(`%c Father-->1、componentDidMount`, "color:#FF9797");
    await  home(5000).then(() => {
      console.log( `%c延迟Father的生命周期-->1、componentDidMount`, "color:#FF9797");
    });
    console.log(`%c Father-->await 后1、componentDidMount`, "color:#FF9797");
  }
  shouldComponentUpdate(){
    console.log(`%c Father-->1、shouldComponentUpdate`, "color:#FF9797");
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c Father-->1、getSnapshotBeforeUpdate`, "color:#FF9797");
  }
  componentDidUpdate(){
    console.log(`%c Father-->1、componentDidUpdate`, "color:#FF9797");
  }
  componentWillUnmount(){
    console.log(`%c Father-->1、componentWillUnmount`, "color:#FF9797");
  }

  render() {
    return (
        <div className="stopLife">
          StopLife
          <Son/>
        </div>
    );
  }
}
