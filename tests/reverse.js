describe('The reverse filter', function () {
	beforeEach(module('steffeFilter'));
	it('reverses the order of characters', function () {
		inject(function (reverseFilter) {
			expect(reverseFilter('redrum')).toEqual('murder');
		});
	});
});