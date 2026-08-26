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

const groupObj = (firstArray, secondArray) =>{
  const grouped = Object.groupBy([...firstArray,...secondArray], (innerArr) => innerArr[1])

   const normalObj = {...grouped}

   return normalObj
}



/**
 * Output: 
 * 
  {
  react: [ [ 'api', 'react' ], [ 'client', 'react' ], [ 'root', 'react' ] ],
  node: [ [ 'api', 'node' ], [ 'client', 'node' ] ],
  nodemon: [ [ 'api', 'nodemon' ] ]
   }
 */


const sentenceMaker = (rawConfigArr, rawDevArr, selPkgMng) =>{
  const stm = []
  const normalObj = groupObj(rawConfigArr, rawDevArr)

  for(const [pkg, value] of Object.entries(normalObj)){
       value.map((val)=>{
         val.pop()
       
      })
    // switch(selPkgMng){
    //    case 'npm':
    //       stm.push(`npm i ${pkg.toString()} --workspace=${}`)
    // }  
   // const otherValues = value.length > 1 ? value.slice(0, -1) : value  
    const sliceValue = value.at(-1).includes(true) && value.length > 1 ? value.slice(0, -1).flat() : value.flat()
    console.log(sliceValue)
    
   }

   return
}

sentenceMaker(configurations, devConfig, pkgManager)
    
  
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
