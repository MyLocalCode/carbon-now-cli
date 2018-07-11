// Packages
import test from 'ava';

// Source
import headlessVisit from '../src/headless-visit';

test('Fails due to wrong URL/timeout/event', async t => {
	try {
		await headlessVisit('foobar');
		t.fail();
	} catch (error) {
		t.pass();
	}
});
