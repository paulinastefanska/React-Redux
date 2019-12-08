import React from 'react';
import './App.css';
import CommentsListContainer from './components/CommentsListContainer';
import NewCommentContainer from './components/NewCommentContainer';

const App = () => {
  return (
    <div className="App">
      <h1>Comments App</h1>
      <CommentsListContainer />
      <NewCommentContainer />
    </div>
  );
};

export default App;
