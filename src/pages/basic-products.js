import * as React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';

const basicProductsPage = ({data}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Basic Products | Daily Food</title>
      </Helmet>
      <main>
        {(() => {
          if (data.server.queryProduct) {
            return data.server.queryProduct.map((product) => {
              if (product.basic) {
                return <div>{product.plural || product.name}</div>;
              } else {
                return undefined;
              }
            });
          } else {
            return <span>No data</span>;
          }
        })()}
      </main>
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    server {
      queryProduct {
        basic
        name
        plural
      }
    }
  }
`;

export default basicProductsPage;
