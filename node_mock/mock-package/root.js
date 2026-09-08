import { detect } from "detect-package-manager";

detect({cwd:'../../'}).then((pm)=>{
    console.log(pm)
})