module.exports = function(RED) {
    "use strict";

    function Crash(n) {
      RED.nodes.createNode(this,n);
      var node = this;

      node.warn('Crashing Node-RED')

      setTimeout(function(){
        console.log('closure')
        throw "shit"
      }, 2000)
      
    }
    RED.nodes.registerType("crash",Crash);
};
