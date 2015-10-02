'use strict';

describe('factory: PokeDataFactory', function () {

  var pokeDataFactory;

  beforeEach(angular.mock.module('pokeApp'));

  beforeEach(inject(function (_PokeDataFactory_) {
    pokeDataFactory = _PokeDataFactory_;
  }));

  it('should call getData and setData', function () {
    var data = { national_id: 1 };
    pokeDataFactory.setData(data);
    expect(angular.equals(pokeDataFactory.getData(), data)).toBeTruthy();
  });

});
