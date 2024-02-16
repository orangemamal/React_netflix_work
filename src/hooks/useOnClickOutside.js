import React, {useEffect} from 'react';

const UseOnClickOutside = (ref, handler) => {

  useEffect(() => {
    const listener = (event) => {
      console.log(ref.current)
      if(!ref.current || ref.current.contain(event.target)) {
        return;
      }
      handler()
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
    };
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default UseOnClickOutside;