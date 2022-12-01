import {graphql} from 'gatsby';

const Fragment = () => null;

export default Fragment;

export const fragment = graphql`
  fragment MeasurementFragment on server_Measurement {
    id
    amount
    unit {
      abbr
      singular
      plural
    }
    static
  }
`;
