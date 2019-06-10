const fs = require('fs');
eval(fs.readFileSync('database.js')+'');

//const assert = require('chai').assert;
//const helloFunction = require("../app").SayHello;
var assert = require('assert');

describe('test for search by club name', function(){
  it('app should return one club info for Coders SB', function(){
    assert.notEqual(getClub('Coders SB'), []);
  });

  it('app should return one club info for IEEE', function(){
    assert.notEqual(getClub('IEEE'), []);
  });

  it('app should return one club info for BFOM', function(){
    assert.notEqual(getClub('BFOM'), []);
  });

  it('app should return empty for UCSB Crew', function(){
    assert.notEqual(getClub('UCSB Crew'), []);
  });

});




describe('Test for search by keyword', function(){
  it('app should return one club info for Coders SB', function(){
    assert.notEqual(matchclub('Hacks'), []);
  });

  it('app should return one club info for Intelligence', function(){
    assert.notEqual(getClub('Intelligence'), []);
  });

  it('app should return one club info for Inclusive', function(){
    assert.notEqual(getClub('BFOM'), []);
  });

  it('app should return one club info for Inclusive', function(){
    assert.notEqual(getClub('BFOM'), []);
  });

  it('app should return one club info for Inclusive', function(){
    assert.notEqual(getClub('Aceplla'), []);
  });

});
