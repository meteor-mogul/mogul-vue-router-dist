// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by vue-router-dist.js.
import { name as packageName } from "meteor/meteormogul:vue-router-dist";

// Write your tests here!
// Here is an example.
Tinytest.add('vue-router-dist - example', function (test) {
  test.equal(packageName, "vue-router-dist");
});
