import test from 'ava';
import { TimeSpan } from '../dist/main';

test('120 seconds is equals to 2 minutes', (t) => {
    const timespan1 = TimeSpan.fromSeconds(120)
    const timespan2 = TimeSpan.fromMinutes(2)

    t.is(timespan1.equals(timespan2), true);
});

test('120 seconds is lesser than 3 minutes', (t) => {
    const timespan1 = TimeSpan.fromSeconds(120)
    const timespan2 = TimeSpan.fromMinutes(3)

    t.is(timespan1.lesser(timespan2), true);
});

test('120 seconds is greater than 1 minute and 40 seconds', (t) => {
    const timespan1 = TimeSpan.fromSeconds(120)
    const timespan2 = TimeSpan.fromMinutes(1).addSeconds(40)

    t.is(timespan1.greater(timespan2), true);
});


test('sorting with compare should work', (t) => {
    const central = TimeSpan.fromSeconds(120)
    const first = TimeSpan.fromMinutes(1).addSeconds(40)
    const last = TimeSpan.fromDays(1)

    const ordered = [central, first, last].sort((a, b) => a.compareTo(b))

    t.is(ordered[0], first);
    t.is(ordered[1], central);
    t.is(ordered[2], last);
});
