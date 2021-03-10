import React, { useEffect, useRef } from 'react';

import { mount } from 'rules/RulesApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
