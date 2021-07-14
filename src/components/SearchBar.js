import React from 'react';

export default function Search(props) {
  return (
    <form>
      <input
        type="search"
        placeholder="Search..."
        onChange={props.handleChange}
      />
    </form>
  );
}