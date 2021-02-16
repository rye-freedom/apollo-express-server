var _ = require('lodash');

const spaceMisionResolvers = {
  Query: {
    missions: (parent, args, { data }) => {
      return Object.values(data.spaceMissions);
    },
    missionById: (parent, { flight_number }, { data }) => {
      return Object.values(data.spaceMissions).find(obj => obj.flight_number == flight_number);
    },
    missionByName: (parent, { mission_name }, { data }) => {
      return Object.values(data.spaceMissions).find(obj => obj.mission_name == mission_name);
    },
    missionByNoradId: (parent, { norad_id }, { data }) => {
      var missions = [];
      // NOTE: there is a better way to do this.. This is not optimal, but
      // in the interest of time going brute force.
      _.forEach(data.spaceMissions, function(mission) {
        _.forEach(mission.rocket.payloads, function(payload){
          if(_.includes(payload.norad_id, norad_id)) {
            missions.push(mission);
          }
        });
      });
      return missions;
    },
    missionByLaunchDate: (parent, { before, after }, { data }) => {
      var missions = [];
      _.forEach(data.spaceMissions, function(mission) {
        if(before && after) {
          if (mission.launch_date_unix <= before || mission.launch_date_unix >= after) {
              missions.push(mission);
            }
        } else if(before) {
          if (mission.launch_date_unix <= before) {
            missions.push(mission);
          }
        } else if(after) {
          if (mission.launch_date_unix >= after) {
            missions.push(mission);
          }
        }
      });
      return missions;
    }
  },
  SpaceMission: {
  },
};

module.exports = spaceMisionResolvers;
