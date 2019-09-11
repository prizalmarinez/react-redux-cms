import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/index'

class PostList extends Component {

    componentDidMount() {
        console.log('App every load');
        this.props.fetchPosts()
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="card" key={post.id}>
                    <div className="content">
                        <div className="header">
                            {post.title}
                        </div>
                        <div className="ui divider"></div>
                        <div className="description">
                            {post.body}
                        </div>
                    </div>
                </div >
            )
        })
    }

    render() {
        return (
            <div className="ui cards">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.posts)
    return {
        posts: Object.values(state.posts)
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);