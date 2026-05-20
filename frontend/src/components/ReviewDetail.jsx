import React from 'react';

export default function ReviewDetail({ item = { title: 'Image MCQ • Medium', author: 'Ms. Patel' } }) {
  return (
    <div className="review-card">
      <b>{item.title}</b>
      <span>Submitted by {item.author}</span>
      <div className="actions"><button>Reject</button><button className="primary">Approve</button></div>
    </div>
  );
}
