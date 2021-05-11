import React from 'react';
import "./index.less";

export default class GrandSon10 extends React.Component {
  constructor(props) {
    console.log(`%c            GrandSon10-->1、constructor`, "color:#181d4b");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state){
    console.log(`%c            GrandSon10-->2、getDerivedStateFromProps`, "color:#181d4b");
    return null;
  }
  componentDidMount() {
    console.log(`%c            GrandSon10-->3、componentDidMount`, "color:#181d4b");
  }
  shouldComponentUpdate(){
    console.log(`%c            GrandSon10-->4、shouldComponentUpdate`, "color:#181d4b");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c            GrandSon10-->5、getSnapshotBeforeUpdate`, "color:#181d4b");
    return null;
  }
  componentDidUpdate(){
    console.log(`%c            GrandSon10-->6、componentDidUpdate`, "color:#181d4b");
  }
  componentWillUnmount(){
    console.log(`%c            GrandSon10-->7、componentWillUnmount`, "color:#181d4b");
  }
  render() {
    return (
        <div className="GrandSon10">
          GrandSon10
        </div>
    );
  }
}
