import {graphql} from 'gatsby';

const Fragment = () => null;

export default Fragment;

export const fragment = graphql`
  fragment ProductFragment on server_Product {
    name
    plural
    tips {
      id
      title
      description
    }
    basic
  }
`;
