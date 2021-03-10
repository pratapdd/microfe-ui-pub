import React, { useCallback, useEffect, useState } from 'react';

import SearchImage from './../../assets/images/search.png';

const Search = () => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');

  function debounce(func, delay) {
    var debounceTimer;
    return function () {
      let context = this;
      let args = arguments;

      clearTimeout(debounceTimer);

      debounceTimer = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  }

  const searchFn = () => {
    fetch('https://api.jsonbin.io/b/601f28bf06934b65f52f6c7d')
      .then((response) => response.json())
      .then((data) => {
        console.log('--data--', data);
      })
      .catch((error) => {
        console.log('--error--', error);
      });
  };

  // This is a caveat of function components. Local variables inside a function expires after every call. Every time the component is re-evaluated, the local variables gets initialized again.
  // Throttle and debounce works using window.setTimeout() behind the scenes. Every time the function component is evaluated, you are registering a fresh setTimeout callback.
  // You have to store a reference to the debounced callback somehow. Unfortunately, useState() will not work for functions.
  // useRef() to the rescue
  // In a function component or a custom hook, useRef() is the equivalent to member variables . Value returned by useRef() does not get re-evaluated every time the functional component is executed. The only inconvenience is that you have to access your stored value via the .current property.
  // or use useRef

  // const modifiedSearch = useRef(debounce(searchFn, 1000), []).current;

  const modifiedSearch = useCallback(debounce(searchFn, 1000), []);

  useEffect(() => {
    // fn(search);
    modifiedSearch(search);
  }, [search]);

  return (
    <div
      className={
        'flex flex-row items-center p-2 mx-2 ' +
        `${
          expanded
            ? 'border border-blue-500 border-solid rounded-md border-1 transition delay-500 ease-in'
            : ''
        }`
      }
    >
      <img
        src={SearchImage}
        alt="searchIcon"
        className={'inline h-4 mr-2 w-4'}
      />

      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className={'outline-none ' + `${expanded ? 'w-96' : 'w-16'}`}
        placeholder="Search"
        onClick={() => setExpanded(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setExpanded(false);
          }
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            modifiedSearch(search);
          }
        }}
      />
    </div>
  );
};

export default Search;
