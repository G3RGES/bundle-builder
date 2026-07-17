import useBundle from "../../hooks/useBundle";
import VariantSelector from "./VariantSelector";
import QuantityStepper from "../Shared/QuantityStepper";
import DiscountBadge from "./DiscountBadge";
import { Check } from "lucide-react";

const ProductCard = ({ product }) => {
  const { state, dispatch } = useBundle();

  const productState = state.bundle[product.id];

  const { selectedVariant, quantities } = productState;

  const currentQuantity = quantities[selectedVariant] ?? 0;

  const { id, title, description, image, variants, price, originalPrice } =
    product;

  const isPlan = product.category === "plans";

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        productId: id,
        variantId: selectedVariant,
      },
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        productId: id,
        variantId: selectedVariant,
      },
    });
  };

  const handleVariantChange = (variantId) => {
    dispatch({
      type: "SELECT_VARIANT",
      payload: {
        productId: id,
        variantId,
      },
    });
  };

  return (
    <article
      className={`
      relative
      min-h-[220px]
      md:min-h-[260px]
      overflow-hidden
      rounded-2xl
      bg-white
      p-4
      md:p-5
      transition-all
      duration-200
      ${
        currentQuantity > 0
          ? "border-4 border-[#5B3DF5]"
          : "border border-[#D9D4F7] hover:border-[#B9AEF2]"
      }
    `}
    >
      <DiscountBadge price={price} originalPrice={originalPrice} />

      <div className="mt-2 grid h-full grid-cols-[72px_1fr] gap-3 md:grid-cols-[130px_1fr] md:gap-4">
        {/* Image */}
        <div className="flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-16 w-16 object-contain md:h-24 md:w-24"
            />
          ) : (
            <div className="flex h-16 items-center justify-center md:h-24">
              <h3 className="text-base font-bold md:text-lg text-center">
                <span className="text-black">{title.split(" ")[0]} </span>
                <span className="text-[#5B3DF5]">
                  {title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h3 className="line-clamp-2 text-base font-bold leading-5 text-gray-900 md:text-lg md:leading-6">
            {title}
          </h3>

          <p className="mt-1 min-h-[2rem] line-clamp-2 text-xs leading-4 text-gray-500 md:min-h-[2.5rem] md:text-sm md:leading-5">
            {description}
          </p>

          <button
            type="button"
            className="mt-1 w-fit text-xs font-medium text-[#5B3DF5] hover:underline md:text-sm"
          >
            Learn More
          </button>

          <div className="mt-2 md:mt-3">
            <VariantSelector
              variants={variants}
              selectedVariant={selectedVariant}
              onSelect={handleVariantChange}
            />
          </div>

          <div className="mt-auto flex items-end justify-between gap-2 pt-2 md:pt-3">
            {isPlan ? (
              <button
                onClick={currentQuantity ? handleDecrease : handleIncrease}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  currentQuantity
                    ? "bg-[#4F2EE8] text-white"
                    : "border border-[#4F2EE8] text-[#4F2EE8] hover:bg-[#4F2EE8] hover:text-white"
                }`}
              >
                {currentQuantity ? (
                  <>
                    <Check size={20} />
                    Selected
                  </>
                ) : (
                  "Select Plan"
                )}
              </button>
            ) : (
              <QuantityStepper
                quantity={currentQuantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            )}

            <div className="flex flex-col items-end leading-none">
              {originalPrice > price && (
                <span className="mb-1 text-xs font-medium text-red-400 line-through md:text-sm">
                  ${originalPrice.toFixed(2)}
                </span>
              )}

              <span className="text-sm font-medium tracking-tight text-gray-500 md:text-base">
                {price === 0 ? "FREE" : `$${price.toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
