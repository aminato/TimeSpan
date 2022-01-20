function t(t,s){var i=new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}),n=t.days.toString(),e=i.format(t.hours),o=i.format(t.minutes),r=i.format(t.seconds),l=(i=new Intl.NumberFormat(void 0,{minimumIntegerDigits:3})).format(t.milliseconds);return"0"===n&&(s=s.replace(/D\?[^DHMSs]/g,""),"00"===e&&(s=s.replace(/HH\?[^DHMSs]/g,""),"00"===o&&(s=s.replace(/MM\?[^DHMSs]/g,""),"00"===r&&(s=s.replace(/SS\?[^DHMSs]/g,""),"000"===l&&(s=s.replace(/mmm\?[^DHMSs]/g,"")))))),(s=s.replace(/\?/g,"")).replace(/D/g,n).replace(/HH/g,e).replace(/MM/g,o).replace(/SS/g,r).replace(/mmm/g,l)}function s(t){for(;t.milliseconds>999;)t._milliseconds-=1e3,t._seconds+=1;for(;t.seconds>59;)t._seconds-=60,t._minutes+=1;for(;t.minutes>59;)t._minutes-=60,t._hours+=1;for(;t.hours>23;)t._hours-=24,t._days+=1}var i=function(){function i(t){this._milliseconds=0,this._seconds=0,this._minutes=0,this._hours=0,this._days=0,this._format="D.HH:MM:SS.mmm",t.days&&(this._days=t.days),t.hours&&(this._hours=t.hours),t.minutes&&(this._minutes=t.minutes),t.seconds&&(this._seconds=t.seconds),t.milliseconds&&(this._milliseconds=t.milliseconds),s(this)}i.fromSeconds=function(t){return new i({seconds:t})},i.fromMinutes=function(t){return new i({minutes:t})},i.fromHours=function(t){return new i({hours:t})},i.fromDays=function(t){return new i({days:t})};var n,e=i.prototype;return e.add=function(t){return new i({milliseconds:this.totalMilliseconds+t.totalMilliseconds})},e.subtract=function(t){return new i({milliseconds:this.totalMilliseconds-t.totalMilliseconds})},e.duration=function(){return new i({milliseconds:Math.abs(this.totalMilliseconds)})},e.addMilliseconds=function(t){return this._milliseconds+=t,s(this),this},e.subtractMilliseconds=function(t){return this._milliseconds-=t,s(this),this},e.addSeconds=function(t){return this._seconds+=t,s(this),this},e.subtractSeconds=function(t){return this._seconds-=t,s(this),this},e.addMinutes=function(t){return this._minutes+=t,s(this),this},e.subtractMinutes=function(t){return this._minutes-=t,s(this),this},e.addHours=function(t){return this._hours+=t,s(this),this},e.subtractHours=function(t){return this._hours-=t,s(this),this},e.addDays=function(t){return this._days+=t,s(this),this},e.subtractDays=function(t){return this._days-=t,s(this),this},e.equals=function(t){return t.totalMilliseconds===this.totalMilliseconds},e.lesser=function(t){return this.totalMilliseconds<t.totalMilliseconds},e.lesserEqual=function(t){return this.totalMilliseconds<=t.totalMilliseconds},e.greater=function(t){return this.totalMilliseconds>t.totalMilliseconds},e.greaterEqual=function(t){return this.totalMilliseconds>=t.totalMilliseconds},e.compareTo=function(t){return this.totalMilliseconds-t.totalMilliseconds},e.format=function(s){return t(this,s)},(n=[{key:"milliseconds",get:function(){return this._milliseconds}},{key:"seconds",get:function(){return this._seconds}},{key:"minutes",get:function(){return this._minutes}},{key:"hours",get:function(){return this._hours}},{key:"days",get:function(){return this._days}},{key:"totalMilliseconds",get:function(){return this._milliseconds+1e3*this._seconds+6e4*this._minutes+36e5*this._hours+864e5*this._days}},{key:"totalSeconds",get:function(){return Math.floor(this.totalMilliseconds/1e3)}},{key:"totalMinutes",get:function(){return Math.floor(this.totalMilliseconds/6e4)}},{key:"totalHours",get:function(){return Math.floor(this.totalMilliseconds/36e5)}},{key:"totalDays",get:function(){return Math.floor(this.totalMilliseconds/864e5)}},{key:"formatter",set:function(t){this._format=t}}])&&function(t,s){for(var i=0;i<s.length;i++){var n=s[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(i.prototype,n),i}();i.prototype.toString=function(){return t(this,this._format)},exports.TimeSpan=i;
//# sourceMappingURL=main.js.map
