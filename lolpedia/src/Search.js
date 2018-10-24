import React from 'react';
import './Search.css';
class Search extends React.Component{
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.props.filter(e.target.value)
    }

    render(){
        return[
            <div className="Search">
                <input onChange={this.onChange} type="text" placeholder="Điền tên tướng"/>
            </div>
        ]
    }
}

export default Search