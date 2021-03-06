import React from "react";
import PropTypes from "prop-types";
import connect from "./connect";
import Schedule from "./Schedule";

const ConnectedSchedule = ({ schedule = {} }) => {
  return <Schedule items={schedule || {}} />;
};
ConnectedSchedule.propTypes = {
  schedule: PropTypes.object,
};

export default connect(
  `
    query ScheduleQuery($conferenceId: ID!, $day: String!) {
      schedule(conferenceId: $conferenceId, day: $day) {
        day
        intervals {
          begin
          end
          sessions {
            day
            title
            description
            type
            speakers {
              name
              image {
                url
              }
              about
            }
            keywords
          }
        }
      }
    }
  `,
  ({ day }) => ({ day })
)(ConnectedSchedule);
