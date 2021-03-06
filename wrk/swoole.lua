wrk.method = "GET"
wrk.headers["Content-Type"] = "text/html"

today = os.date("%Y%m%d_%H%M%S")

okfile = io.open("log/swoole_success_" .. today .. ".log", "w")
failfile = io.open("log/swoole_error_" .. today .. ".log", "w")
local cnt = 0

response = function(status, header, body)
     cnt = cnt + 1

     if status == 200 then
     	okfile:write("status:" .. status .. " = " .. tostring(cnt) .. "\n")
	 else
		print("error status : " .. status .. " = " .. tostring(cnt) .. "\n");
		print("	1 header.Server = " .. header["Server"] .. "\n")
		print("	2 header.Content-Type = " .. header["Content-Type"] .. "\n")
		print("	3 header.Content-Length = " .. header["Content-Length"] .. "\n")
		print("	4 header.Date = " .. header["Date"] .. "\n")

		failfile:write("status:" .. status .. " = " .. tostring(cnt) .. "\n" .. body .. "\n-------------------------------------------------\n")
     end
end

done = function(summary, latency, requests)
     	okfile:write("------------- SUMMARY -------------\n")
     	failfile:write("------------- SUMMARY -------------\n")

		 print("Response count: " .. tostring(cnt) )

     	okfile.close()
	failfile.close()
end

