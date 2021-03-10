import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';

const ProvidersWrapper = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const customRender = (ui, options) => {
  return render(ui, { wrapper: ProvidersWrapper, ...options });
}

export * from '@testing-library/react';

export { customRender as render };
