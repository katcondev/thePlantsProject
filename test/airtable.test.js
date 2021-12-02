'use strict';

var Airtable = require('../lib/airtable');

describe('Airtable', function() {
    it("doesn't include the API key as an enumerable property", function() {
        var fakeAirtable = new Airtable({apiKey: 'keyrnJ3ystlKHJbYv'});

        Object.values(fakeAirtable).forEach(function(value) {
            expect(value).not.toEqual('keyrnJ3ystlKHJbYv');
        });
    });

    it('recognizes API key as a property of the constructor', function() {
        try {
            Airtable.apiKey = 'keyrnJ3ystlKHJbYv';
            new Airtable({});
            new Airtable();
        } finally {
            delete Airtable.apiKey;
        }
    });

    it('recognizes API key as an environment variable', function() {
        try {
            process.env.AIRTABLE_API_KEY = 'keyrnJ3ystlKHJbYv';
            new Airtable({});
            new Airtable();
        } finally {
            delete process.env.AIRTABLE_API_KEY;
        }
    });

    it('throws when API key is not provided', function() {
        expect(function() {
            new Airtable({});
        }).toThrow();

        expect(function() {
            new Airtable();
        }).toThrow();
    });

    describe('configure static method', function() {
        it('sets the apiKey', function() {
            Airtable.configure({apiKey: 'keyrnJ3ystlKHJbYv'});

            try {
                expect(Airtable.apiKey).toEqual('keyrnJ3ystlKHJbYv');
            } finally {
                delete Airtable.apiKey;
            }
        });
    });

    describe('base static method', function() {
        it('throws in the absense of an API key', function() {
            expect(function() {
                Airtable.base('appUEHCG0RnYm88pm');
            });
        });

        it('returns a Base function configured with the given base and access to tables', function() {
            try {
                Airtable.apiKey = 'keyrnJ3ystlKHJbYv';
                var baseFn = Airtable.base('appUEHCG0RnYm88pm');

                expect(baseFn.getId()).toBe('appUEHCG0RnYm88pm');
                expect(baseFn('plant-mood').name).toBe('plant-mood');
                expect(baseFn('plant-mood').id).toBe(null);
            } finally {
                delete Airtable.apiKey;
            }
        });
    });

    describe('base instance method', function() {
        it('returns a Base instance configured with the given ID', function() {
            var base = new Airtable({apiKey: 'keyrnJ3ystlKHJbYv'}).base('appUEHCG0RnYm88pm');

            expect(base.getId()).toBe('appUEHCG0RnYm88pm');
        });
    });
});
