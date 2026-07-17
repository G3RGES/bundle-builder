const QuantityStepper = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity === 0}
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-md
          bg-gray-100
          text-sm
          font-semibold
          text-gray-600
          transition
          hover:bg-gray-200
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        −
      </button>

      <span className="min-w-[16px] text-center text-base font-medium">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-md
          bg-gray-100
          text-sm
          font-semibold
          text-gray-600
          transition
          hover:bg-gray-200
        "
      >
        +
      </button>
    </div>
  );
};

export default QuantityStepper;
