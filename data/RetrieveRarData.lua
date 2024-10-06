// insert this as module script

// initializes httpservice
local http = game:GetService("httpservice")

// sets url
local url = "https://zoomll.github.io/RAR-Website/data/rar.json"

// retrieves json data from url
local raw = http:GetAsync(url)

// creates global variable with the table
rardata = http:JSONDecode(raw)

return rardata
