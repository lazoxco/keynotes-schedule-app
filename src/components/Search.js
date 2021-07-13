import React from 'react';

export default function Search({ getTerm }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => getTerm(e.target.value)}
      />
    </form>
  );
}
