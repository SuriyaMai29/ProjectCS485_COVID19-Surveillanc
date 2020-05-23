import React from "react"
export default function Debug(prop){
return(<per>{JSON.stringify(prop.value,null,2)}</per>)
}