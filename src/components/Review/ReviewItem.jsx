import useBundle from "../../hooks/useBundle";

function ReviewItem({ product }) {
  const { dispatch } = useBundle();

  const hasDiscount = product.originalPrice > product.price;
  const isFree = product.price === 0;

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        productId: product.id,
        variantId: product.selectedVariant,
      },
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        productId: product.id,
        variantId: product.selectedVariant,
      },
    });
  };

  return (
    <div className="flex items-center justify-between gap-3">
      {/* Left */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-10 max-w-10 object-contain"
          />
        </div>

        <div className="min-w-0">
          <h4 className="line-clamp-2 text-[15px] font-medium leading-5 text-[#1F1F1F]">
            {product.title}
          </h4>

          {product.variantLabel && (
            <div className="mt-1 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full border border-gray-300"
                style={{ backgroundColor: product.variantColor }}
              />

              <span className="text-[11px] font-medium text-[#6B7280]">
                {product.variantLabel}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex shrink-0 items-center gap-5">
        {/* Quantity Stepper */}
        <div>
          {/* Replace with your QuantityStepper */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrease}
              className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-sm text-gray-500 transition hover:bg-gray-100"
              aria-label={`Decrease ${product.title}`}
            >
              −
            </button>

            <span className="min-w-4 text-center text-[15px] font-medium">
              {product.totalQuantity}
            </span>

            <button
              onClick={handleIncrease}
              className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-sm text-gray-500 transition hover:bg-gray-100"
              aria-label={`Increase ${product.title}`}
            >
              +
            </button>
          </div>
        </div>

        {/* Prices */}
        <div className="flex min-w-[70px] flex-col items-end leading-tight">
          {hasDiscount && (
            <span className="text-[13px] text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}

          <span
            className={`text-[15px] font-semibold ${
              isFree ? "text-[#4F2EE8]" : "text-[#4F2EE8]"
            }`}
          >
            {isFree ? "FREE" : `$${product.price.toFixed(2)}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
