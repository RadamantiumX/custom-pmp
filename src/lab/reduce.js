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
 const dev = []
const devConfig = [ [ true, 'react' ], [ true, 'node' ], [ true, 'nodemon' ] ]

const inputPkgs = ['react', 'node', 'nodemon']
const pkgManager = 'npm'
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

const grouped = Object.groupBy([...configurations,...devConfig], (config) => config[1])

 const normalObj = {...grouped}

//  const senetenceMaker = (pkgMng, groupedAnswers)=>{
//   const fullStm = []
//    for (const [pkg, value] of Object.entries(groupedAnswers)){
//       value.map((val)=>{
//         val.pop()
//       })
//       switch(pkgMng){
//           case 'npm':
//             fullStm.push(`${pkgMng} i `)
//       }
//    }
//  }
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
let flatedValue = []
// TODO: this works
// TODO: maybe wil turn to object is the solution
    for(const [pkg, value] of Object.entries(normalObj)){
       value.map((val)=>{
         val.pop()
      
      })
     const transformed = value.flat()
    transformed.includes(true) ? transformed.pop() : transformed
    flatedValue.push(transformed)
     
   }
   console.log(flatedValue)

  //  for (const [pkg, ws] of Object.entries(normalObj)){
  //     ws.map((w)=>{
  //       console.log(w[0].toString())
  //     })
  //  }

 // console.log(normalObj)
 /**
  * Example final:
  * 
{
  tsup: [ [ 'api' ], [ 'client' ] ],
  inquirer: [ [ 'root' ] ],
  react: [ [ 'api' ], [ 'client' ], [ 'root' ] ],
  node: [ [ 'api' ], [ 'client' ] ],
  nodemon: [ [ 'api' ] ]
}

Example with dev boolean:
{
  tsup: [ [ 'api' ], [ 'client' ] ],
  inquirer: [ [ 'root' ] ],
  react: [ [ 'api' ], [ 'client' ], [ 'root' ] ],
  node: [ [ 'api' ], [ 'client' ] ],
  nodemon: [ [ 'api' ], [ true ] ]
}
  */
