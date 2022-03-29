import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'The Winter Hammock Company',
  description: 'The best online shop for your winter sun enjoyment',
  keywords: 'outdoor, winter, sun, relax',
};

export default Meta;
