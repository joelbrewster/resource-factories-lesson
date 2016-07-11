
// What we'll do is define this factory as a resource that maps to our API:
//                ⤹ 2:into this       ⤹ 1:inject this
angular.module('lightsaberApp').factory('Episode', Episode);

// dependency injection
Episode.$inject = ['$resource'];
// define the function Episode
function Episode($resource){
  // FACTORIES MUST RETURN AN OBJECT!
  // return {};
  // This code was copied from the contollers.js
  return $resource('http://localhost:3000/episodes/:id', {id: '@_id'}, {
    'update': { method:'PUT' }
  });
}
