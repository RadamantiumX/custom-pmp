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
 const minConf = [ [ 'api', 'nodemon' ], ["client", "nodemon"], ["client", 'react'], ["api", "cors"], ["client", "tsup"], ["api", "react"], ["docs", "inquirer"] ]
 const minDev = [[ '--save-dev', 'nodemon' ],['--optional-dev', 'nodemon'], ['--save-prod', "react"]]
 const dev = []
const devConfig = [ [ true, 'react' ], [ true, 'node' ], [ true, 'nodemon' ] ]

const inputPkgs = ['react', 'node', 'nodemon']
const pkgManager = 'pnpm'

// TODO: can work this
// TODO: use this in main project
const groupObj = (firstArray, secondArray) =>{
  const accArr = []
  const groupedWs = Object.groupBy([...firstArray], (innerArr) => innerArr[1])
  const groupedOps = Object.groupBy([...secondArray], (innerArr) => innerArr[1])
   const normalObj = {ws:{...groupedWs}, options:{...groupedOps}}
   for(const [keyOut, valueOut] of Object.entries(normalObj)){
   // console.log(valueOut)
      for(const [keyIn, valueIn] of Object.entries(valueOut)){
         if(!accArr.includes(keyIn)){
          accArr.push(keyIn)
         }
         valueIn.map((item)=>{
          
          item.pop()
         })
         
      }
      
   }
   console.log(accArr)
   return normalObj
}

const grp = groupObj(minConf, minDev)
// console.log(grp["ws"]["nodemon"])
// console.log(grp)
/**
 * Output: 
 * 
 {
   ws: { nodemon: [ [Array], [Array] ], react: [ [Array] ] },
   options: { nodemon: [ [Array], [Array] ], react: [ [Array] ] }
 }
 */
//  for( const [key, value] of Object.entries(grp)){
//      console.log(key)
//      console.log(value)
//  }




export const sentenceMaker = async (rawConfigArr, rawDevArr, selPkgMng) =>{
  const stm = []
  const normalObj = groupObj(rawConfigArr, rawDevArr)
  console.log(normalObj)
  for(const [pkg, value] of Object.entries(normalObj)){
       value.map((val)=>{
         val.pop()
       
      })
    const wsValue = value.at(-1).includes(true) && value.length > 1 ? value.slice(0, -1).flat() : value.flat()
    const devValue = value.at(-1).includes(true)
     switch(selPkgMng){
         case 'npm':
            stm.push(`npm i ${pkg.toString()} --workspace=${wsValue.join("-")}${devValue ? " --save-dev" : ""}`);
            break;
         case 'pnpm':
            stm.push(`pnpm add${devValue ? " -D" : ""} ${pkg.toString()} --filter ${wsValue.join("-")}`);
            break;
         case 'yarn':
            stm.push(`yarn workspace ${wsValue.join("-")} add${devValue ? " -D" : ""} ${pkg.toString()}`);
            break;   
      }  
   }
  
   return stm.join(' & ')
}

 // sentenceMaker(minConf, minDev, pkgManager)


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
