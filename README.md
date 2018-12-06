# webpack- 4x
boiler plate  webpack version 4 configuration
 
 The code below is base config for starting out your webconfig file. I updated the scripts also this makes it a bit more dynamic.
    Scripts:

    previous:
    "npm run webpack -- --env development" 
    
    current:
    "npm run webpack -- --env.mode development"


   alternate syntax for webpack config
     module.exports = env => {
  // logging enviroment variables    
    //console.log(env); //{ mode: 'development' }   
    //console.log(env.mode); //developments    
    return {
        mode:env.mode,
        output:{
         filename:"bundle.js"
    }
  };
};
