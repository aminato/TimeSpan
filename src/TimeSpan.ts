const MSEC_PER_SECOND = 1000;
const MSEC_PER_MINUTE = 1000 * 60;
const MSEC_PER_HOUR = 1000 * 60 * 60;
const MSEC_PER_DAY = 1000 * 60 * 60 * 24;

function formatTimespan(ts: TimeSpan, format: string): string {
    let formatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 })
    const days = ts.days.toString()
    const hours = formatter.format(ts.hours)
    const minutes = formatter.format(ts.minutes)
    const seconds = formatter.format(ts.seconds)
    formatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 3 })
    const milliseconds = formatter.format(ts.milliseconds)

    return format.replace(/D/g, days).replace(/HH/g, hours).replace(/MM/g, minutes).replace(/SS/g, seconds).replace(/mmm/g, milliseconds)
}

function normalizeTimeSpan(ts: TimeSpan) {
    while (ts.milliseconds > 999) {
        ts._milliseconds -= 1000;
        ts._seconds += 1
    }
    while (ts.seconds > 59) {
        ts._seconds -= 60;
        ts._minutes += 1
    }
    while (ts.minutes > 59) {
        ts._minutes -= 60;
        ts._hours += 1
    }
    while (ts.hours > 23) {
        ts._hours -= 24;
        ts._days += 1
    }
}

interface TimeSpanConstructorParameters {
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
}

export class TimeSpan {
    _milliseconds: number = 0;
    _seconds: number = 0;
    _minutes: number = 0;
    _hours: number = 0;
    _days: number = 0;

    _format = "D.HH:MM:SS.mmm"

    constructor(parameters: TimeSpanConstructorParameters) {
        if (parameters.days) {
            this._days = parameters.days;
        }
        if (parameters.hours) {
            this._hours = parameters.hours;
        }
        if (parameters.minutes) {
            this._minutes = parameters.minutes;
        }
        if (parameters.seconds) {
            this._seconds = parameters.seconds;
        }
        if (parameters.milliseconds) {
            this._milliseconds = parameters.milliseconds;
        }

        normalizeTimeSpan(this);
    }

    static fromSeconds(seconds: number) {
        return new TimeSpan({ seconds });
    }
    static fromMinutes(minutes: number) {
        return new TimeSpan({ minutes });
    }
    static fromHours(hours: number) {
        return new TimeSpan({ hours });
    }
    static fromDays(days: number) {
        return new TimeSpan({ days });
    }

    add(timespan: TimeSpan) {
        return new TimeSpan({ milliseconds: this.totalMilliseconds + timespan.totalMilliseconds })
    }
    subtract(timespan: TimeSpan) {
        return new TimeSpan({ milliseconds: this.totalMilliseconds - timespan.totalMilliseconds })
    }
    duration() {
        return new TimeSpan({ milliseconds: Math.abs(this.totalMilliseconds) })
    }

    addMilliseconds(milliseconds: number) {
        this._milliseconds += milliseconds
        normalizeTimeSpan(this);
        return this;
    }
    subtractMilliseconds(milliseconds: number) {
        this._milliseconds -= milliseconds
        normalizeTimeSpan(this);
        return this;
    }

    addSeconds(seconds: number) {
        this._seconds += seconds
        normalizeTimeSpan(this);
        return this;
    }
    subtractSeconds(seconds: number) {
        this._seconds -= seconds
        normalizeTimeSpan(this);
        return this;
    }

    addMinutes(minutes: number) {
        this._minutes += minutes
        normalizeTimeSpan(this);
        return this;
    }
    subtractMinutes(minutes: number) {
        this._minutes -= minutes
        normalizeTimeSpan(this);
        return this;
    }

    addHours(hours: number) {
        this._hours += hours
        normalizeTimeSpan(this);
        return this;
    }
    subtractHours(hours: number) {
        this._hours -= hours
        normalizeTimeSpan(this);
        return this;
    }

    addDays(days: number) {
        this._days += days
        normalizeTimeSpan(this);
        return this;
    }
    subtractDays(days: number) {
        this._days -= days
        normalizeTimeSpan(this);
        return this;
    }


    get milliseconds() {
        return this._milliseconds;
    }
    get seconds() {
        return this._seconds;
    }
    get minutes() {
        return this._minutes;
    }
    get hours() {
        return this._hours;
    }
    get days() {
        return this._days;
    }

    get totalMilliseconds() {
        const milliseconds = this._milliseconds;
        const seconds_ms = this._seconds * MSEC_PER_SECOND;
        const minutes_ms = this._minutes * MSEC_PER_MINUTE;
        const hours_ms = this._hours * MSEC_PER_HOUR;
        const days_ms = this._days * MSEC_PER_DAY;
        return milliseconds + seconds_ms + minutes_ms + hours_ms + days_ms
    }
    get totalSeconds() {
        return Math.floor(this.totalMilliseconds / MSEC_PER_SECOND);
    }
    get totalMinutes() {
        return Math.floor(this.totalMilliseconds / MSEC_PER_MINUTE);
    }
    get totalHours() {
        return Math.floor(this.totalMilliseconds / MSEC_PER_HOUR);
    }
    get totalDays() {
        return Math.floor(this.totalMilliseconds / MSEC_PER_DAY);
    }

    equals(compare: TimeSpan) {
        return compare.totalMilliseconds === this.totalMilliseconds;
    }
    lesser(compare: TimeSpan) {
        return this.totalMilliseconds < compare.totalMilliseconds;
    }
    lesserEqual(compare: TimeSpan) {
        return this.totalMilliseconds <= compare.totalMilliseconds;
    }
    greater(compare: TimeSpan) {
        return this.totalMilliseconds > compare.totalMilliseconds;
    }
    greaterEqual(compare: TimeSpan) {
        return this.totalMilliseconds >= compare.totalMilliseconds;
    }
    compareTo(compare: TimeSpan){
        return this.totalMilliseconds - compare.totalMilliseconds;
    }

    set formatter(value: string) {
        this._format = value
    }
    format(format: string): string {
        return formatTimespan(this, format)
    }
}

TimeSpan.prototype.toString = function () {
    return formatTimespan(this, this._format)
}
