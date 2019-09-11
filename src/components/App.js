import React from 'react';
// style
import './App.css'
// router 
import { BrowserRouter, Route } from 'react-router-dom';
// components
import MenuHeader from './MenuHeader'
import PostList from './posts/PostList'
import AddPost from './posts/AddPost'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                App
                <MenuHeader />
                <div className="ui container mt-100">
                    <Route path='/' exact component={PostList} />
                    <Route path='/posts/new' exact component={AddPost} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;