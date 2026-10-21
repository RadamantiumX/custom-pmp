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

  // Array para PUSHEAR los pkgs
  const accArr = []

  // Separamos los grupos, usamos el nombre del paquete ingresado como KEY
  const groupedWs = Object.groupBy([...firstArray], (innerArr) => innerArr[1])
  const groupedOps = Object.groupBy([...secondArray], (innerArr) => innerArr[1])

   // Los juntamos en un unico objeto, los ponemos en dos KEYS que representan los WORKSPACE (ws) y las opciones FLAG (options)
   const normalObj = {ws:{...groupedWs}, options:{...groupedOps}}

   // Iteramos el objeto ya ensamblado
   for(const [keyOut, valueOut] of Object.entries(normalObj)){
   
      // Volvemos a iterar el objeto interno
      for(const [keyIn, valueIn] of Object.entries(valueOut)){
         if(!accArr.includes(keyIn)){

          // Empujamos los pkgs al array
          accArr.push(keyIn)
         }
         valueIn.map((item)=>{
          // Quitamos el valor del pkgs dentro cada valor
          item.pop()
         })
         
      }
      
   }
   
   return { normalObj, accArr }
}

// const {normalObj, accArr} = groupObj(minConf, minDev)
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
  // for( const [key, value] of Object.entries(normalObj)){
  //     console.log(key)
  //     console.log(value)
  // }




export const sentenceMaker = async (rawConfigArr, rawDevArr, selPkgMng) =>{
  const stm = []


  const {normalObj, accArr} = groupObj(rawConfigArr, rawDevArr)
 
  // Esta vez solo mapeamos el array de pkgs
   accArr.map((pkg)=>{
     switch(selPkgMng){
       case 'npm':
         stm.push(`npm i ${pkg.toString()} --workspace=${normalObj.ws[pkg].flat().join("-")}${normalObj.options[pkg] ? normalObj.options[pkg].flat().join(" ") : ""}`);
         break;
       case 'pnpm':
         stm.push(`pnpm add${normalObj.options[pkg] ? normalObj.options[pkg].flat().join(" ") : ""} ${pkg.toString()} --filter ${normalObj.ws[pkg].flat().join("-")}`);
         break;
       case 'yarn':
         stm.push(`yarn workspace ${normalObj.ws[pkg].flat().join("-")} add${normalObj.options[pkg] ? normalObj.options[pkg].flat().join(" ") : ""} ${pkg.toString()}`);
         break;    
     }
   })
   
   return stm.join(' & ')
}

 console.log(sentenceMaker(minConf, minDev, 'yarn'))


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
