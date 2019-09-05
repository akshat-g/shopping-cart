window.React = require('react');
var ProductData = require('./ProductData');
var cartAPI = require('./utils/cartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');

// Load Product data
ProductData.init();

// Load mock api call
cartAPI.getProductData();

// Render FluxCartApp Controller View
React.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);
