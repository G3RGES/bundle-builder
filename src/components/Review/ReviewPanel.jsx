import useBundle from "../../hooks/useBundle";
import {
  getDiscountedTotal,
  getOriginalTotal,
  getSavings,
  getSelectedProducts,
} from "../../utils/calculateBundle";
import ReviewItem from "./ReviewItem";
import toast from "react-hot-toast";
import { Truck } from "lucide-react";

const Section = ({ title, items }) => {
  if (!items.length) return null;

  return (
    <>
      <section className="space-y-3">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#9AA5B8]">
          {title}
        </h3>

        <div className="space-y-3">
          {items.map((product) => (
            <ReviewItem
              key={`${product.id}-${product.variantId ?? "default"}`}
              product={product}
            />
          ))}
        </div>
      </section>

      <hr className="border-[#D6DCE8]" />
    </>
  );
};

export default function ReviewPanel() {
  const { state } = useBundle();

  const selectedProducts = getSelectedProducts(state.bundle);

  const originalTotal = getOriginalTotal(selectedProducts);
  const discountedTotal = getDiscountedTotal(selectedProducts);
  const savings = getSavings(originalTotal, discountedTotal);

  const groupedProducts = {
    cameras: selectedProducts.filter((p) => p.category === "cameras"),
    sensors: selectedProducts.filter((p) => p.category === "sensors"),
    accessories: selectedProducts.filter((p) => p.category === "accessories"),
    plans: selectedProducts.filter((p) => p.category === "plans"),
  };

  const handleCheckout = () => {
    toast.success("Your bundle is ready for checkout!", {
      icon: "🛒",
      position: "top-center",
    });
  };

  const handleSaveBundle = () => {
    toast.success("Bundle saved for later!");
  };

  return (
    <aside
      className="
      w-full
      rounded-3xl
      bg-[#EEF4FF]
      p-6
      md:p-7
      lg:w-[390px]
      lg:shrink-0
      lg:sticky
      lg:top-6"
    >
      <div className="flex flex-col gap-5">
        <header>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5E6D89]">
            Review
          </p>

          <h2 className="mt-4 text-[32px] leading-none font-semibold text-[#1F1F1F] md:text-[36px]">
            Your security system
          </h2>

          <p className="mt-3 max-w-[290px] text-[15px] leading-7 text-[#586174] md:text-[16px]">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
        </header>

        <hr className="border-[#D6DCE8]" />

        <Section title="Cameras" items={groupedProducts.cameras} />
        <Section title="Sensors" items={groupedProducts.sensors} />
        <Section title="Accessories" items={groupedProducts.accessories} />

        {groupedProducts.plans.length > 0 && (
          <>
            <section className="space-y-3">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#9AA5B8]">
                Home Monitoring Plan
              </h3>

              {groupedProducts.plans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <span className="text-[18px] font-semibold text-[#1F1F1F]">
                      Cam{" "}
                    </span>

                    <span className="text-[18px] font-semibold text-[#4F2EE8]">
                      Unlimited
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-[13px] text-[#9098A6] line-through">
                      ${plan.originalPrice.toFixed(2)}/mo
                    </div>

                    <div className="text-[15px] font-semibold text-[#4F2EE8]">
                      ${plan.price.toFixed(2)}/mo
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <hr className="border-[#D6DCE8]" />
          </>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
              <Truck className="h-5 w-5 text-[#00B89C]" />
            </div>

            <span className="text-[17px] font-medium">Fast Shipping</span>
          </div>

          <div className="text-right">
            <div className="text-[13px] text-[#9098A6] line-through">$5.99</div>

            <div className="text-[15px] font-semibold text-[#4F2EE8]">FREE</div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <img
            src="/images/satisfaction-badge.png"
            alt=""
            className="h-24 w-24 object-contain md:h-28 md:w-28"
          />

          <div className="text-right">
            <div className="mb-2 inline-block rounded-md bg-[#4F2EE8] px-2.5 py-1 text-xs font-medium text-white">
              as low as $19.19/mo
            </div>

            <div className="text-[16px] text-[#8A909A] line-through">
              ${originalTotal.toFixed(2)}
            </div>

            <div className="text-[44px] font-bold leading-none tracking-tight text-[#4F2EE8] md:text-[50px]">
              ${discountedTotal.toFixed(2)}
            </div>
          </div>
        </div>

        <p className="text-center text-[13px] font-medium text-[#00A88A]">
          Congrats! You're saving ${savings.toFixed(2)} on your security bundle!
        </p>

        <button
          onClick={handleCheckout}
          className="h-[54px] rounded-2xl bg-[#4F2EE8] text-2xl font-semibold text-white transition hover:brightness-110"
        >
          Checkout
        </button>

        <button
          onClick={handleSaveBundle}
          className="text-center text-[13px] text-[#7A7A7A] underline underline-offset-2 hover:text-[#4B5563]"
        >
          Save my system for later
        </button>
      </div>
    </aside>
  );
}
