// Import Dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// Create new component
//--------------------------------------------------------
module.exports = (template, package, num) => {
    
    let {type, attribs, children } = package;
    let tag = package.name;
    
    let {classVar, name, group} = attribs;
    let className = attribs.class;

    // parameters for creating components files
    let jobDir, compDir, groupDir , file, compIndex, groupIndex;

    // regular expression to look for repeated components in index.js
    let regExp = new RegExp(name, "g");
 
    // set job directory
    jobDir = path.join(__dirname,`../../../jobs/${num}/`);
   
    // if the component have a group, prepend directory before component directory
    if(group){
        groupDir = path.join(jobDir,`src/components/${group}/`);
        compDir = path.join(jobDir,`src/components/${group}/${name}/`);
    }else{
        compDir = path.join(jobDir,`src/components/${name}/`);
    };
    
    // create component files
    file = compDir + `${name}.js`;
    compIndex = compDir + `index.js`;
    groupIndex = groupDir + `index.js`;
 
    // create file with template if isnt exist
    fse.outputFileSync(file,template);

    //  create group indexjs if not exist
    if(!fse.pathExistsSync(groupIndex)){
            fse.outputFileSync(groupIndex, "//Import group components\n//--------------------------------------------------------")
    };
  
    // create group path if the component belongs to a groupd but the path doesn't exist
    // if component belongs to a group and group index exists in directory
    // read over index files and check if components already exist
    // if it doesn't throw false to catch
    // read file async and check for component name with regexp
    // if return null -> append to group index.js 
    // else log found message

    if(group){
        if(fse.pathExistsSync(groupIndex)){
            fse.readFileSync(groupIndex,"utf8").match(regExp) ? 
                null
            :  
                fse.appendFileSync(groupIndex,`\nexport { ${name} } from "./${name}";`);
        }else{
            // catch if index.js does not exist
            // create a file and write export statement
            fse.outputFileSync(groupIndex,`\nexport { ${name} } from "./${name}";`)
        }
    }
  
    // if component index file doesnt exist, create index file and write export code
    // else if it does exist, then append to the file
    if(fse.pathExistsSync(compIndex)){

            fse.readFile(compIndex,'utf8', (err, text) => {        
                if(!text.match(regExp)){
                    fse.appendFileSync(compIndex,`\nexport { ${name} } from "./${name}";`);  
                }
            })
            
    }else{
        fse.outputFileSync(compIndex,`export { ${name} } from "./${name}";\n`);
    };
};