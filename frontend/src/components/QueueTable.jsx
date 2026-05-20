import React from 'react';

export default function QueueTable({ rows = [], onSelect }) {
  return (
    <table>
      <thead>
        <tr><th>Question</th><th>Teacher</th><th>Type</th><th>Status</th></tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} className="review-row" onClick={() => onSelect && onSelect(r)}>
            <td>{r.title}</td>
            <td>{r.teacher}</td>
            <td>{r.type}</td>
            <td>{r.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
