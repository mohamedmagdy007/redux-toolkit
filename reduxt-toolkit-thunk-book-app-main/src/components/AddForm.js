import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBooks } from '../store/Actions';

const Addform = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postBooks({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
      })
    );
    titleRef.current.value = null;
    descriptionRef.current.value = null;
    priceRef.current.value = null;
  };
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              ref={titleRef}
              placeholderid="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              ref={priceRef}
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              ref={descriptionRef}
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
