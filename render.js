var React = require('react/addons');
var ReactDOMServer = require('react-dom/server');
var requireFromString = require('require-from-string');

var source = "<div><h3>Hello World!!!!!!!</h3></div>";

var reactTemplates=require("react-templates/src/reactTemplates");

source = reactTemplates.convertTemplateToReact(source,{modules: 'commonjs', name: 'template'});

var component = requireFromString(source);

var contents = React.renderToString(React.createElement(component));

console.log(contents);
