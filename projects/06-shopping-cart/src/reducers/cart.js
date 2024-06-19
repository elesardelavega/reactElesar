// estado inicial, parsear lo que hay en el local storage
export const cartiIitialState = JSON.parse(localStorage.getItem("cart")) || [];

export const CAR_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

// update local storage with state from cart
export const updateLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CAR_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;

    // verificar si el producto ya existe en el carrito
    const productInCartIndex = state.findIndex((item) => item.id === id);

    // si el producto ya existe en el carrito, incrementar la cantidad
    if (productInCartIndex >= 0) {
      // 1 forma, usamos structuredClone
      //   const newState = structuredClone(state);
      //   newState[productInCartIndex].quantity += 1;
      //   return newState;

      // 2 forma, usando el map
      //   const newState = state.map((item) => {
      //     if (item.id === id) {
      //       return {
      //         ...item,
      //         quantity: item.quantity + 1,
      //       };
      //     }
      //     return item;
      //   });

      // 3 forma, usando el spread operator y slice (más rápido)
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [...state, { ...action.payload, quantity: 1 }];
    // actualizar local storage
    updateLocalStorage(newState);
    return newState;
  },

  [CAR_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    // filtrar productos con id diferente
    const newState = state.filter((item) => item.id !== id);
    // actualizar local storage
    updateLocalStorage(newState);
    return newState;
  },

  [CAR_ACTIONS_TYPES.CLEAR_CART]: () => {
    // actualizar local storage
    updateLocalStorage([]);
    // devolver el estado inicial
    return [];
  },
};

// crear el reducer, pasando el estado inicial y la accion
export const cartReducer = (state, action) => {
  // extraer el type
  const { type: actionType } = action;

  const updateState = UPDATE_STATE_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
};

// 2 forma
//   const { type: actionType, payload: actionPayload } = action;
//   switch (actionType) {
//     // agregar al carrito
//     case CAR_ACTIONS_TYPES.ADD_TO_CART: {
//       const { id } = actionPayload;

//       // verificar si el producto ya existe en el carrito
//       const productInCartIndex = state.findIndex((item) => item.id === id);

//       // si el producto ya existe en el carrito, incrementar la cantidad
//       if (productInCartIndex >= 0) {
//         // 1 forma, usamos structuredClone
//         const newState = structuredClone(state);
//         newState[productInCartIndex].quantity += 1;
//         return newState;
//       }

//       const newState = [...state, { ...actionPayload, quantity: 1 }];
//       // actualizar local storage
//       updateLocalStorage(newState);
//       return newState;
//     }

//     // remover del carrito
//     case CAR_ACTIONS_TYPES.REMOVE_FROM_CART: {
//       const { id } = actionPayload;
//       // filtrar productos con id diferente
//       const newState = state.filter((item) => item.id !== id);
//       // actualizar local storage
//       updateLocalStorage(newState);
//       return newState;
//     }

//     // vaciar carrito
//     case CAR_ACTIONS_TYPES.CLEAR_CART: {
//       // actualizar local storage
//       updateLocalStorage(cartiIitialState);
//       // devolver el estado inicial
//       return cartiIitialState;
//     }
//   }
//   return state;
