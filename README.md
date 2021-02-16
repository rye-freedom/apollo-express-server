## SpaceX Coding Assignment By Ryan Howell
For this assessment I tried to stay within the time limit bounds, but I did use a little more time than what was suggested. This was mostly for the initial learning aspect of it as I haven't directly worked with GraphQL/Apollo before. I ended up spending some additional time reading the docs and various other resources (very cool framework). I also spent a few extra minutes writing this summary. Either way, this was a fun assignment and I appreciate the opportunity to learn something new and add a new tool to the toolbox. 

### Additional Notes 
Becuase of the time limit suggestion, I did not fully implement everything, namely unit/integration tests. I started to add the testing framework but to actully create a suite of unit/integration tests, I would have went way over the suggested time limit. I added a handful of test stubs that would have been my first set of tests to validate some functionality. 

I made the following assumption:
- UI developers/consumers of the API are mostly intested in querying the mission name, launch date, and the norad ids of the payloads on board the rocket based on the problem statement. 

I made the following design choices based on my assumptions:
- Create a schema that allows a consumer of the api to fetch all space mission data based on the above assumption. ie: get all space missions that occurred before a given date, get a space mission by mission name, etc. 


---
### How to Run
```sh
# Clone or download this repository
$ git clone https://github.com/rye-freedom/apollo-express-server.git

# Navigate to the root directory of the repo
$ cd apollo-express-server

# You will need to have Node and NPM installed on your machine. Please follow 
# instructions for your OS to do this before attempting to run this code. 
# This code is known to work with the folowing versions:
#   node v12.9.0
#   npm 6.10.3

# Install npm modules (from the root of this repository)
$ npm install

# To run in development mode (utilizing nodemon for hot changes)
$ npm run dev

# Running without nodemon
$ npm start

# Execute unit tests
$ npm run test

```
After starting the server (either with `npm run dev` or `npm start`), naviage to the [GraphQL Playground](http://localhost:3000/graphql) which will be running at `http://localhost:3000/graphql` to exectue queries against the server. Some sample queries are included below. 

---
### Execute Test Queries
For convenience, I am providing a handful of queries that I used in the GraphQL playground to test the schema and queries.
```js
// Get all space missions and all data for them
query GetAllMissions {
 missions {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_id
      site_name
    }
    rocket {
      rocket_id
      payloads {
        payload_id
        norad_id
      }
    }
    launch_success
  }
}

// Get a space mission by id (flight number)
query GetMissionById {
 missionById(flight_number: 91) {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_id
      site_name
    }
    rocket {
      rocket_id
      payloads {
        payload_id
        norad_id
      }
    }
    launch_success
  }
}

// Get a space mission by mission name
query GetMissionByName {
  missionByName(mission_name: "Starlink 4") {
    flight_number
    mission_name
    launch_date_unix
    rocket {
      rocket_id
      payloads {
        payload_id
        norad_id
      }
    }
  }
}

// Get space missions by norad id
query GetMissionByNoradId {
  missionByNoradId(norad_id: 45197) {
    flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_id
      site_name
    }
    rocket {
      rocket_id
      payloads {
        payload_id
        norad_id
      }
    }
    launch_success
  }
}

// Get space missions in a date range
query GetMissionByLaunchDate {
  missionByLaunchDate(before: "1581951955", after: "1587583800") {
     flight_number
    mission_name
    launch_date_unix
    launch_site {
      site_id
      site_name
    }
    rocket {
      rocket_id
      payloads {
        payload_id
        norad_id
      }
    }
    launch_success
  }
}
```