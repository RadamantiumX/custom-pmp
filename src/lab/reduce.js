 const configurations = [
  [ 'api', 'tsup' ],
  [ 'client', 'tsup' ],
  [ 'root', 'inquirer' ],
   [ 'api', 'react' ],
   [ 'client', 'react' ],
   [ 'root', 'react' ],
   [ 'api', 'node' ],
   [ 'client', 'node' ],
   [ 'api', 'nodemon' ]
 ]
const inputPkgs = ['react', 'node', 'nodemon']
// const grouping = responseArray.reduce((currentItem, accumulate)=>{
//    const ws = currentItem[0]
//    const pkg = currentItem[1]

//    if(!accumulate[pkg]) accumulate[pkg] = []
   
//    accumulate[pkg].push(ws)
//    return accumulate
// }, {})

// console.log(grouping)

// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// const countedNames = Object.create(null);
// for (const name of names) {
//   const currCount = countedNames[name] ?? 0;
//   countedNames[name] = currCount + 1;
// }

const grouped = Object.groupBy(configurations, (config) => config[1])

 const normalObj = {...grouped}
/**
 * Output: 
 * 
  {
  react: [ [ 'api', 'react' ], [ 'client', 'react' ], [ 'root', 'react' ] ],
  node: [ [ 'api', 'node' ], [ 'client', 'node' ] ],
  nodemon: [ [ 'api', 'nodemon' ] ]
   }
 */


// console.log(normalObj)

  for(const [pkg, ws] of Object.entries(normalObj)){
     ws.map((w)=>{
       w.pop()
      
    })
  }
  
console.log(normalObj)

