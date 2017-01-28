import { test } from 'qunit';
import moduleForAcceptance from 'todomvc/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | kariyer main page');

test('visiting /kariyer-main-page', function(assert) {
  visit('http://www.kariyer.net/');
  
   percySnapshot('Empty todo list1');

  andThen(function() {
    assert.equal(currentURL(), 'http://www.kariyer.net/');
  });
});
