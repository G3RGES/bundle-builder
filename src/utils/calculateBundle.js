import products from "../data/products.json";

export const getSelectedProducts = (bundle) => {
  return products.flatMap((product) => {
    const state = bundle[product.id];

    return Object.entries(state.quantities)
      .filter(([, quantity]) => quantity > 0)
      .map(([variantId, quantity]) => {
        const variant = product.variants.find((v) => v.id === variantId);

        return {
          ...product,

          // Current selected variant row
          selectedVariant: variantId,

          // Variant information
          variantId,
          variantLabel: variant?.label ?? null,
          variantColor: variant?.color ?? null,

          // Quantity for THIS variant only
          quantity,

          // Keep compatibility with existing code if needed
          totalQuantity: quantity,
        };
      });
  });
};

export const getSelectedCount = (selectedProducts, category) => {
  return selectedProducts.filter((product) => product.category === category)
    .length;
};

export const getOriginalTotal = (selectedProducts) => {
  return selectedProducts.reduce(
    (total, product) => total + product.originalPrice * product.totalQuantity,
    0,
  );
};

export const getDiscountedTotal = (selectedProducts) => {
  return selectedProducts.reduce(
    (total, product) => total + product.price * product.totalQuantity,
    0,
  );
};

export const getSavings = (originalTotal, discountedTotal) => {
  return originalTotal - discountedTotal;
};

export const getProductsByCategory = (selectedProducts, category) => {
  return selectedProducts.filter((product) => product.category === category);
};
