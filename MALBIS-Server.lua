local JSON=dofile("json.lua")
-- Load addresses table
local addressFile=io.open("addresses.json","r")
local addresses=JSON.decode(assert(addressFile:read("*all")))
addressFile:close()
function func()
    local results={}
    for i=1,#addresses do
        local address=addresses[i].value
        local length=addresses[i].length
        if length==1 then
            results[i]=memory.readbyte(address)
        elseif length == 2 then
            results[i]=memory.readword(address)
        end
    end
    local outFile=io.open("out.json","w")
    outFile:write(JSON.encode(results))
    outFile:close()
end
gui.register(func)