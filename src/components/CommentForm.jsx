import React from 'react';

const CommentForm = () => {
  return (
    <form className="form">
      <div className="form__item">
        <label htmlFor="comment__username">user's Name : </label>
        <input
          type="text"
          name="comment__username"
          id="comment__username"
          placeholder="username of commentor...."
        />
      </div>

      <div className="form__item">
        <label htmlFor="user__description">user's comment</label>
        <textarea
          name="user__description"
          id="user__description"
          cols="30"
          rows="3"
          placeholder="user's comment goes here..."
        ></textarea>
      </div>
      <div className="form__item">
        <label htmlFor="user__comment__rating">Product Rating(out of 5)</label>
        <input
          type="number"
          name="user__comment__rating"
          id="user__comment__rating"
          placeholder="4.9/5"
        />
      </div>
      <input type="submit" value="Add Comment" />
    </form>
  );
};

export default CommentForm;
