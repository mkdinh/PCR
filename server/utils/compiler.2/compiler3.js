// Import Dependencies
//--------------------------------------------------------
const templater = require('./templater');

// Complier Modules
//--------------------------------------------------------
module.exports = function compile(package, jobType, cb, num, parent) {
    // if this is a recursive interation, set parent the name of parent object for reference
    var parent = parent || "App";
    var num = num || package.num;
    let compiledLevel = false;

        // loop through each key in object and recursively check if key value is an object
        for(component in package){
            if(component === 'name'){
                // object have name component, then set this name as parent object
                // this will be pass as an argument for recursive loop
                parent = package[component]
               
            }else if(package[component] === 'default'){ 
                // if the component is using the default template
                // This will component will use default settings
                console.log(`default template on ${component}`)
                
            }else if(typeof package[component] === 'object'){
                // if this prop is a nested object
                // check whether it is called 'children' -> then run recursive loop
                // this will be where we create html and css files

                if(component === 'children'){
                    // if the component is a children
                    // console.log(`##########################################################################`)
                    // console.log(`                               ${parent}                                  `)
                    // console.log(`##########################################################################`)

                    package[component].forEach(child => {
                        // console.log(`-----------------------${parent}--------------------------`)
                        compile(child, jobType, null, num, parent);
                    })
                }
            // }else if(!compiledLevel){
            //     console.log(component)
            //     // if component is a attributes (html/css)
            //     // recursive loop to read over files parameters
            //     // send the whole object as argument to templater to generate files
            //     templater(package, jobType, num, parent, () => { 
            //         compile(package[component], jobType, null, num, parent);
            //         compiledLevel = true;
            //     })
              
            // }else{
            //     // console.log(component,": ", package[component])
            
            // }
            
        }
    }

    if(parent === "App" && cb ){
        cb()
    }
}
     