const DiscountBadge = ({ price, originalPrice }) => {
  if (!originalPrice || originalPrice <= price) {
    return null;
  }

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <span
      className="
        absolute
        left-4
        top-4
        rounded-full
        bg-[#5B3DF5]
        px-3
        py-1
        text-xs
        font-semibold
        text-white
      "
    >
      Save {discount}%
    </span>
  );
};

export default DiscountBadge;
