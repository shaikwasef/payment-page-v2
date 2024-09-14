export const CAKE_ORDERED = "CAKE_OREDERED";
export const CAKE_RESTOCK = "CAKE_RESTOCK";
export const ICE_CREAM_RESTOCK = "ICE_CREAM_RESTOCK";
export const ICE_CREAM_ORDER = "ICE_CREAM_ORDER";

export function orderCake() {
  return {
    type: CAKE_ORDERED,
  };
}

export function restockCake() {
  return {
    type: CAKE_RESTOCK,
  };
}

export function restockIceCream() {
  return {
    type: ICE_CREAM_RESTOCK,
  };
}

export function orderIceCream() {
  return {
    type: ICE_CREAM_ORDER,
  };
}
