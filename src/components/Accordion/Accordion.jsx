import { steps } from "../../constants/steps";
import useBundle from "../../hooks/useBundle";
import {
  getSelectedProducts,
  getSelectedCount,
} from "../../utils/calculateBundle";
import products from "../../data/products.json";
import ProductCard from "../Product/ProductCard";
import Button from "../Shared/Button";
import { ChevronDown, ChevronRight } from "lucide-react";

const Accordion = () => {
  const { state, dispatch } = useBundle();

  const selectedProducts = getSelectedProducts(state.bundle);

  return (
    <section className="flex-1 rounded-3xl bg-white p-4 md:p-6 lg:p-8">
      {steps.map((step, index) => {
        const Icon = step.icon;

        const selectedCount = getSelectedCount(selectedProducts, step.category);

        const isActive = state.activeStep === step.id;

        const stepProducts = products.filter(
          (product) => product.category === step.category,
        );

        return (
          <div
            key={step.id}
            className="border-b border-gray-200 py-5 md:py-6 last:border-none"
          >
            {/* STEP LABEL */}
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500 md:text-xs">
              {step.label}
            </p>

            {/* HEADER */}
            <div
              onClick={() =>
                dispatch({
                  type: "SET_ACTIVE_STEP",
                  payload: isActive ? null : step.id,
                })
              }
              className="flex cursor-pointer items-center justify-between gap-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Icon size={20} className="shrink-0 md:h-[22px] md:w-[22px]" />

                <h2 className="text-lg font-semibold leading-tight md:text-xl">
                  {step.title}
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2 md:gap-4">
                <span className="hidden text-sm text-gray-500 sm:block">
                  {selectedCount} selected
                </span>

                <span className="text-xs text-gray-500 sm:hidden">
                  {selectedCount}
                </span>

                {isActive ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </div>
            </div>

            {isActive && (
              <div className="mt-5 rounded-2xl bg-[#EEF4FF] p-4 md:mt-6 md:p-6 lg:p-8">
                {/* Products */}
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
                  {stepProducts.map((product, productIndex) => {
                    const isLastOdd =
                      stepProducts.length % 2 === 1 &&
                      productIndex === stepProducts.length - 1;

                    return (
                      <div
                        key={product.id}
                        className={
                          isLastOdd
                            ? "xl:col-span-2 xl:flex xl:justify-center"
                            : ""
                        }
                      >
                        <ProductCard product={product} />
                      </div>
                    );
                  })}
                </div>

                {/* Next Button */}
                {index < steps.length - 1 && (
                  <div className="mt-6 flex justify-center md:mt-8">
                    <Button
                      className="w-full sm:w-auto"
                      onClick={() =>
                        dispatch({
                          type: "SET_ACTIVE_STEP",
                          payload: steps[index + 1].id,
                        })
                      }
                    >
                      Next: Choose your{" "}
                      {steps[index + 1].title
                        .replace("Choose your ", "")
                        .replace("Add extra ", "")}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Accordion;
