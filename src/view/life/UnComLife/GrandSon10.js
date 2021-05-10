import React from 'react';
import "./index.less";

export default class GrandSon10 extends React.Component {
  constructor(props) {
    console.log(`%c            GrandSon10-->1、constructor`, "color:#600000");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state){
    console.log(`%c            GrandSon10-->2、getDerivedStateFromProps`, "color:#600000");
    return null;
  }
  componentDidMount() {
    console.log(`%c            GrandSon10-->3、componentDidMount`, "color:#600000");
  }
  shouldComponentUpdate(){
    console.log(`%c            GrandSon10-->4、shouldComponentUpdate`, "color:#600000");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c            GrandSon10-->5、getSnapshotBeforeUpdate`, "color:#600000");
    return null;
  }
  componentDidUpdate(){
    console.log(`%c            GrandSon10-->6、componentDidUpdate`, "color:#600000");
  }
  componentWillUnmount(){
    console.log(`%c            GrandSon10-->7、componentWillUnmount`, "color:#600000");
  }
  render() {
    return (
        <div className="GrandSon10">
          GrandSon10
        </div>
    );
  }
}
