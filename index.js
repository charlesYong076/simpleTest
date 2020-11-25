exports.handler =  async function(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event.x, null, 2))
    
    return parseInt(event.x)+1;
  }

//   const result = exports.handler({x:1}, {})
//   console.log("🚀 ~ file: index.js ~ line 7 ~ result", result)