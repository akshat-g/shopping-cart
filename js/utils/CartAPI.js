var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {
  // load mock product data from localStorage into ProductStore via actions
  getProductData: function() {
    var data = JSON.parse(localStorage.getItem('product'));
    FluxCartActions.receiveProduct(data);
  }
};
