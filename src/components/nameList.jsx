import React from 'react';
// import { useDeferredValue } from 'react';

const NameList = ({ names }) =>{
  // const deferredProducts = useDeferredValue(names);
  return (
    <ul>
      {names.map((name,i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;