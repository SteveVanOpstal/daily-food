import * as React from 'react';
import {Link} from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
      </p>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;
