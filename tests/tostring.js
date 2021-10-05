import test from 'ava';
import { TimeSpan } from '../dist/main';

test('1 day 2 hours, 20 minutes, 15 seconds and 300 ms', (t) => {
    let timespan = TimeSpan.fromDays(1).addHours(2).addMinutes(20).addSeconds(15).addMilliseconds(300)
    t.is(timespan.toString(), '1.02:20:15.300');
    t.is(timespan.format('D.HH:MM:SS.mmm'), '1.02:20:15.300');
    t.is(timespan.format('D HH:MM:SS'), '1 02:20:15');

    timespan.formatter = "HH:MM:SS.mmm"
    t.is(timespan.toString(), '02:20:15.300');
});


test('0 day 0 hours, 1 minutes, 0 seconds and 0 ms', (t) => {
    let timespan = TimeSpan.fromMinutes(1)
    t.is(timespan.toString(), '0.00:01:00.000');
});
