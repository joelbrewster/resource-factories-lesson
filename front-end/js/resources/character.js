// What we'll do is define this factory as a resource that maps to our API:
//                ⤹ 2:into this       ⤹ 1:inject this
angular.module('lightsaberApp').factory('Character', Character);

// dependency injection
Character.$inject = ['$resource'];
// define the function Character
function Character($resource){
  // FACTORIES MUST RETURN AN OBJECT!
  // return {};
  // This code was copied from the contollers.js
  return $resource('http://localhost:3000/characters/:id', {id: '@_id'}, {
    'update': { method:'PUT' }
  });
}
