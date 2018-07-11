// Packages
import test from 'ava';

test('Fails due to wrong URL/timeout/event', async t => {
	try {
		await headlessVisit('foobar');
		t.fail();
	} catch (error) {
		t.pass();
	}
});
