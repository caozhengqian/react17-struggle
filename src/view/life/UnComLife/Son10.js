import React from 'react';
import "./index.less";
import GrandSon10 from './GrandSon10'

export default class Son10 extends React.Component {
  constructor(props) {
    console.log(`%c       Son10-->1、constructor`, "color:#4e72b8");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state){
    console.log(`%c       Son10-->2、getDerivedStateFromProps`, "color:#4e72b8");
    return null;
  }
  componentDidMount() {
    console.log(`%c       Son10-->3、componentDidMount`, "color:#4e72b8");
  }
  shouldComponentUpdate(){
    console.log(`%c       Son10-->4、shouldComponentUpdate`, "color:#4e72b8");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c       Son10-->5、getSnapshotBeforeUpdate`, "color:#4e72b8");
    return null;
  }
  componentDidUpdate(){
    console.log(`%c       Son10-->6、componentDidUpdate`, "color:#4e72b8");
  }
  componentWillUnmount(){
    console.log(`%c       Son10-->7、componentWillUnmount`, "color:#4e72b8");
  }
  render() {
    return (
        <div className="Son10">
          Son10
          <GrandSon10/>
        </div>
    );
  }
}
