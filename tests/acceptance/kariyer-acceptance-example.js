import { test } from 'qunit';
import moduleForAcceptance from 'todomvc/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Kariyer.net Main Page');

test('kariyer.net main page', function(assert) {
  visit('http://www.kariyer.net/');

  percySnapshot('Main Page Snapshot');
  
   andThen(function() {
    assert.equal(currentURL(), 'http://www.kariyer.net/');
    assert.equal(find('.featured-jobs>.wrapper>h2').text().trim(), 'ÖNE ÇIKAN İŞ İLANLARI');
  });

  fillIn('#keywordas1', 'Java Developer');
  keyEvent('#keywordas1', 'keydown', 13);

  percySnapshot('Job Search Snapshot');

});
