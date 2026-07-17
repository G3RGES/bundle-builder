import createInitialBundle from "../utils/createInitialBundle";

export const initialState = {
  activeStep: 1,
  bundle: createInitialBundle(),
};

const bundleReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.payload,
      };

    case "LOAD_STATE":
      return action.payload;

    case "RESET_BUNDLE":
      return initialState;

    case "INCREASE_QUANTITY":
      return {
        ...state,
        bundle: {
          ...state.bundle,
          [action.payload.productId]: {
            ...state.bundle[action.payload.productId],
            quantities: {
              ...state.bundle[action.payload.productId].quantities,
              [action.payload.variantId]:
                state.bundle[action.payload.productId].quantities[
                  action.payload.variantId
                ] + 1,
            },
          },
        },
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        bundle: {
          ...state.bundle,
          [action.payload.productId]: {
            ...state.bundle[action.payload.productId],
            quantities: {
              ...state.bundle[action.payload.productId].quantities,
              [action.payload.variantId]: Math.max(
                0,
                state.bundle[action.payload.productId].quantities[
                  action.payload.variantId
                ] - 1,
              ),
            },
          },
        },
      };

    case "SELECT_VARIANT":
      return {
        ...state,
        bundle: {
          ...state.bundle,
          [action.payload.productId]: {
            ...state.bundle[action.payload.productId],
            selectedVariant: action.payload.variantId,
          },
        },
      };

    default:
      return state;
  }
};

export default bundleReducer;
