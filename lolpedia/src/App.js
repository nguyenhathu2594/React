import React, { Component } from 'react';
import Title from './Title';
import Search from './Search';
import LolCard from './LolCard';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loldex: this.props.loldex
    }
    this.onUpdate = this.onUpdate.bind(this)
  }

  onUpdate(word){
    let newLoldex = this.props.loldex.filter(p=>p.indexOf(word)>-1)
    this.setState({loldex: newLoldex})
  }

  render() {
    return (
      <div>
        <Title text="Liên minh Pedia"/>
        <Search filter={this.onUpdate}/>
        <section className="Content">
          {
            this.state.loldex.map(p=><LolCard name={p}/>)
          }
        </section>
      </div>
    );
  }
}

export default App;
