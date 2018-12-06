module.exports = ({mode}) => {
  //log mode variables you can remove this log if you like :)
    console.log("enviroment mode: "+mode);
    return {
        mode,
        output:{
         filename:"bundle.js"
    }
  };
};