import {graphql} from 'gatsby';

const Fragment = () => null;

export default Fragment;

export const fragment = graphql`
  fragment PartFragment on server_Part {
    id
    title
    related {
      id
    }
    actions {
      ...ActionFragment
      actions {
        ...ActionFragment
        actions {
          ...ActionFragment
        }
      }
    }
  }
`;
