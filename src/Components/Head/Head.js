import React, { useEffect } from 'react';

const Head = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props]);

  return <></>;
};

export default Head;
