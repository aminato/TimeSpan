import test from 'ava';
import { TimeSpan } from '../dist/main';

test('1 seconds is equals to 1000 ms', (t) => {
    t.is(TimeSpan.fromSeconds(1).totalMilliseconds, 1000);
});

test('1 minute is equals to 60 seconds', (t) => {
    t.is(TimeSpan.fromMinutes(1).totalMilliseconds, TimeSpan.fromSeconds(60).totalMilliseconds);
});

test('1 hour is equals to 60 minutes', (t) => {
    t.is(TimeSpan.fromHours(1).totalMilliseconds, TimeSpan.fromMinutes(60).totalMilliseconds);
});

test('1 day is equals to 24 hours', (t) => {
    t.is(TimeSpan.fromDays(1).totalMilliseconds, TimeSpan.fromHours(24).totalMilliseconds);
});
