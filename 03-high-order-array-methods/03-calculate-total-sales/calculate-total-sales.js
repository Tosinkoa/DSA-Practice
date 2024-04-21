function calculateTotalSalesWithTax(products, taxRate) {
  const totalProductPrice = products.reduce(
    (acc, eachProduct) => acc + eachProduct.price * eachProduct.quantity,
    0
  );

  const taxAmount = (totalProductPrice * taxRate) / 100;
  const totalPriceWithTax = totalProductPrice + taxAmount;

  return parseFloat(totalPriceWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
