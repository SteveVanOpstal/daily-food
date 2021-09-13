import React from 'react';
import {Helmet} from 'react-helmet';
import Timezone from '../components/timezone/timezone';
import {graphql, StaticQuery, Link} from 'gatsby';
import {isToday, parseISO} from 'date-fns';
import PartFragment from '../components/fragments/partFragment';
import MeasurementFragment from '../components/fragments/measurementFragment';
import ProductFragment from '../components/fragments/productFragment';
import ActionFragment from '../components/fragments/actionFragment';
import Recipe from '../components/recipe';

const IndexPage = () => {
  return (
    <React.Fragment>
      <ProductFragment />
      <MeasurementFragment />
      <ActionFragment />
      <PartFragment />
      <Helmet>
        <title>Today | Daily Food</title>
      </Helmet>
      <main>
        <Timezone />
        <StaticQuery
          query={graphql`
            query {
              server {
                querySchedule {
                  date
                  recipe {
                    slug
                    title
                    description
                    measurements {
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
                    parts {
                      ...PartFragment
                      related {
                        ...PartFragment
                      }
                    }
                    draft
                  }
                }
              }
            }
          `}
          render={(data) => {
            const scheduleToday = data.server.querySchedule.find((s) => isToday(parseISO(s.date)));
            if (scheduleToday) {
              return <Recipe recipe={scheduleToday.recipe} />;
            } else {
              return (
                <p>
                  No recipe today, check out the <Link to="/schedule">schedule</Link>
                </p>
              );
            }
          }}
        />
      </main>
    </React.Fragment>
  );
};

export default IndexPage;
