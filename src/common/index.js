export const  removeLastSlesh = (str) => {  return str.replace(/\/$/, "")};
export const spaceTo = (str,to = '-', toLower = true) => { 
    if(!str) return
    if(toLower) return str.toLowerCase().replace(' ', to)
    return str.replace(' ', to)
    }