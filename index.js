var luxon = require("luxon")
var ical = require("node-ical")
ical.async.fromURL('https://www.exclusiveautowraps.com/?calendarista_handler=feeds&calendarista_appkey=CA60a1e9db559a8&calendarista_service=9&calendarista_status=-1', function(err, data) { console.log(data); });
