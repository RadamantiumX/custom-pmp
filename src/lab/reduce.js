 const configurations = [
   [ 'api', 'react' ],
   [ 'client', 'react' ],
   [ 'root', 'react' ],
   [ 'api', 'node' ],
   [ 'client', 'node' ],
   [ 'api', 'nodemon' ]
 ]

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

console.log(normalObj)