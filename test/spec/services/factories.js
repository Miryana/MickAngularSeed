'use strict';

describe('Service: ', function () {

  // load the service's module
  beforeEach(module('dataDictApp'));

  it('should get an instance of the lodash factory', inject(function(_) {
    expect(_).to.not.equal(undefined);
  }));
});
