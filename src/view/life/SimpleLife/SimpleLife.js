import React from 'react';
import Son from './Son'
import Son from './Son.js'

export default class SimpleLife extends React.Component {
  constructor(props) {
    console.log(`%c Father-->1、constructor`, "color:#FF9797");
    super(props);
    this.state = {};
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
        <div className="simpleLife">
          SimpleLife
          <Son/>
        </div>
    );
  }

}
