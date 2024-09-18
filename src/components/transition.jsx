import React from 'react';
import { useState, useTransition } from 'react';
import NameList from "./nameList";
import {DummyData} from '../dummyData';

const Transition = ()=> {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  function filterNames(filterTerm) {
    if (!filterTerm) {
      return DummyData;
    }
    return DummyData.filter((name) => name.includes(filterTerm));
  }
  
  const filteredNames = filterNames(filterTerm);

  function updateFilterHandler(event) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    // setFilterTerm(event.target.value);
  }

  return (
    <div className="transition">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p style={{color: 'white'}}>Updating List...</p>}
      <NameList names={filteredNames} />
    </div>
  );
}

export default Transition;