import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentContainer from './NewCommentContainer';

const App = () => {
  return (
    <div className="App">
      <h1>Comments App</h1>
      <CommentsListContainer />
      <h2>Add new comment</h2>
      <NewCommentContainer />
    </div>
  );
};

export default App;
