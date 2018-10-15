import React, {Component} from 'react'

class Posts extends Component {
    state = {
        id: null
    }

    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id;

        this.setState ({
            id: id
        })
    }

    render () {
        return (
            <div className="container"> 
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Posts; 