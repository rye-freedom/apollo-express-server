const gql = require('apollo-server-express').gql;

const spaceMissionSchema = gql`
  type Query {
    missions: [SpaceMission]!
    missionById(
      """
      The flight number of the space mission to retrieve.
      Must be an Int value
      """
      flight_number: Int!
      ): SpaceMission

    missionByName(
      """
      The mission name of the space mission to retrieve.
      Must be a String value
      """
      mission_name: String!
      ): SpaceMission

    missionByNoradId(
      """
      The norad id that is present in the space mission to retrieve.
      Must be an Int value
      """
      norad_id: Int!
      ): [SpaceMission]!

    missionByLaunchDate(
      """
      A date to get space missions by before the given date. If before and after is provided,
      missions will be returned that are within that range.
      Must be a Unix Date String, ie: '1581951955'
      """
      before: String,

      """
      A date to get space missions by after the given date. If before and after is provided,
      missions will be returned that are within that range.
      Must be a Unix Date String, ie: '1581951955'
      """
      after: String
      ): [SpaceMission]!
  }

  """
  SpaceMission Type
  Defines a data object that represents a Space Mission
  """
  type SpaceMission {
    flight_number: Int
    mission_name: String
    launch_date_unix: String
    rocket: Rocket
    launch_site: LaunchSite
    launch_success: Boolean
  }

  """
  LaunchSite Type
  Defines a data object that represents a Launch Site
  """
  type LaunchSite {
    site_id: String
    site_name: String
    site_name_long: String
  }

  """
  Rocket Type
  Defines a data object that represents a Rocket
  """
  type Rocket {
    rocket_id: String
    payloads: [RocketPayload]
  }

  """
  RocketPayload Type
  Defines a data object that represents a Rocket Payload
  """
  type RocketPayload {
    payload_id: String
    norad_id: [Int]!
  }
`;

module.exports = spaceMissionSchema;
