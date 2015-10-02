'use strict';

describe('service: FirebaseService', function () {

  var firebaseService;

  beforeEach(angular.mock.module('pokeApp'));

  beforeEach(inject(function (_FirebaseService_) {
    firebaseService = _FirebaseService_;
  }));

  it('should call getData and setData', function () {
    var data = { national_id: 1 };
    var response = firebaseService.getComments(data.id);
    expect(response.$$state.status).toBe(1);
  });

});
