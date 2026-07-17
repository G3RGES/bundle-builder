const VariantSelector = ({ variants, selectedVariant, onSelect }) => {
  if (!variants.length) return null;

  return (
    <div className="flex items-center gap-2">
      {variants.map((variant) => {
        const isSelected = selectedVariant === variant.id;

        return (
          <button
            key={variant.id}
            type="button"
            onClick={() => onSelect(variant.id)}
            aria-label={variant.label}
            title={variant.label}
            className={`
              flex h-8 w-8 items-center justify-center rounded-full
              border transition-colors duration-200
              ${
                isSelected
                  ? "border-[#5B3DF5] border-3"
                  : "border-gray-300 hover:border-[#5B3DF5]"
              }
            `}
          >
            <span
              className="h-5 w-5 rounded-full border"
              style={{
                backgroundColor: variant.color,
                borderColor: variant.borderColor,
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default VariantSelector;
