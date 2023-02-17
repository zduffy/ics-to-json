var icsToJson = require("ics-to-json")
// Get ICS text however you like, example below
// Make sure you have the right CORS settings if needed
var fileLocation = 'https://www.exclusiveautowraps.com/?calendarista_handler=feeds&calendarista_appkey=CA60a1e9db559a8&calendarista_service=9&calendarista_status=-1';
const convert = async (fileLocation) => {
    const icsRes = await fetch(fileLocation)
    const icsData = await icsRes.text()
    // Convert
    const data = icsToJson(icsData)
    return data
}
