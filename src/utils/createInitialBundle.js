import products from "../data/products.json";

export default function createInitialBundle() {
  return products.reduce((bundle, product) => {
    const hasVariants = product.variants.length > 0;

    const productState = {
      selectedVariant: hasVariants ? product.variants[0].id : "default",

      quantities: hasVariants
        ? product.variants.reduce((quantities, variant) => {
            quantities[variant.id] = 0;
            return quantities;
          }, {})
        : {
            default: 0,
          },
    };

    bundle[product.id] = productState;

    return bundle;
  }, {});
}
