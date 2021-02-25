import React from 'react';
import "./index.less";

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){

    }
    //简单的生命周期
  _simpleLife(){
    this.props.history.push({pathname: '/simpleLife'})
  }
  //data改变不传给子组件
  _dataLifeNotToSon(){
    this.props.history.push({pathname: '/dataLifeNotToSon'})
  }
  //data改变，传给子组件
  _dataLifeToSon(){
    this.props.history.push({pathname: '/dataLifeToSon'})
  }
  //子组件改变父组件
  _sonChangeFather(){
    this.props.history.push({pathname: '/sonChangeFather'})
  }
  //路由跳转,生命周期
  _routerLife(){
    this.props.history.push({pathname: '/routerLife'})
  }
  //路由跳转,有延迟的生命周期
  _routerLifeTimeOut(){
    this.props.history.push({pathname: '/routerLifeTimeOut'})
  }
  //组件卸载,生命周期
  _unComLife(){
    this.props.history.push({pathname: '/unComLife'})
  }
  //组件卸载,有延迟生命周期
  _unComLifeTimeOut(){
    this.props.history.push({pathname: '/unComLifeTimeOut'})
  }
  //循环生命周期
  _forLife(){
    this.props.history.push({pathname: '/forLife'})
  }
  //停止生命周期
  _stopLife(){
    this.props.history.push({pathname: '/stopLife'})
  }
  //不停止生命周期
  _noStopLife(){
    this.props.history.push({pathname: '/noStopLife'})
  }
    render() {
        return (
            <div className="life">

              <button onClick={()=>this._simpleLife()}>
              <span className="red">正常渲染</span>的生命周期
              </button>
              <br />
              <br />
              父<span className="red">data改变</span>
              <button onClick={()=>this._dataLifeNotToSon()}>
                <span className="blue">不传</span>给子组件
              </button>
                <span>、</span>
              <button onClick={()=>this._dataLifeToSon()}>
                <span className="blue">传</span>给子组件
              </button>
                <br />
                <br />
                <button onClick={()=>this._sonChangeFather()}>
                <span className="blue">子组件</span><span className="red">更新</span
                ><span className="blue">父组件</span>
              </button>
                <br />
                <br />
                <span className="blue">路由跳转</span>后的
                <button onClick={()=>this._routerLife()}>
                <span className="green">生命周期</span>
              </button>
                <span>、</span>
                <button onClick={()=>this._routerLifeTimeOut()}>
                <span className="green">接口延迟</span>是否继续等待返回？
              </button>
                <br />
                <span className="red">组件卸载后</span>的
                <button onClick={()=>this._unComLife()}>
                <span className="green">生命周期</span>
              </button>
                <span>、</span>
                <button onClick={()=>this._unComLifeTimeOut()}>
                <span className="green">接口延迟</span>是否继续等待返回？
              </button>
                <br />
                <br />
              <button onClick={()=>this._forLife()}>
              <span className="red">循环后</span>的生命周期
              </button>
              <br/>
              <br/>
              <button onClick={()=>this._stopLife()}>
                <span className="red">中断</span>生命周期
              </button>、
              <button onClick={()=>this._noStopLife()}>
                <span className="red">不中断</span>生命周期
              </button>
            </div>
        );
    }
}
