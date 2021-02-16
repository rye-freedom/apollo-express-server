const chai = require('chai');


const listQuery = `{
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
   }`

describe('space mission queries', () => {
    it('should list all missions', (done) => {
        done();
    });

    it('should get a mission by id', (done) => {
        done();
    });

    it('should get a mission by name', (done) => {
        done();
    });

    it('should get missions by norad id', (done) => {
        done();
    });

    it('should get missions before a date', (done) => {
        done();
    });

    it('should get missions after a date', (done) => {
        done();
    });

    it('should get missions before a date and after a date', (done) => {
      done();
  });
});