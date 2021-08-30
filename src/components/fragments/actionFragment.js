import {graphql} from 'gatsby';

const Fragment = () => null;

export default Fragment;

export const fragment = graphql`
  fragment ActionFragment on server_Action {
    id
    description
    icon
    measurement {
      ...MeasurementFragment
      product {
        ...ProductFragment
        measurements {
          ...MeasurementFragment
          product {
            ...ProductFragment
          }
        }
      }
    }
  }
`;
