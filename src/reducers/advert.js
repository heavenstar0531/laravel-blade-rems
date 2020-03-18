const initialState = {
  allAdverts: [],
  advertsCount: 0
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_NEW_ADVERT": {
      return {
        ...state,
        lastAddedAdvert: action.advert,
        allAdverts: [...state.allAdverts, action.advert],
        advertsCount: state.advertsCount + 1
      };
    }
    case "FETCH_ALL_ADVERTS": {
      const { data, count } = action.adverts.data;
      if (state.allAdverts) {
        return {
          ...state,
          allAdverts: [...state.allAdverts, ...data],
          advertsCount: count
        };
      }
      return {
        ...state,
        allAdverts: data,
        advertsCount: count
      };
    }
    case "FETCH_ONE_ADVERT": {
      return {
        ...state,
        selectedAdvert: action.advert
      };
    }
    default: {
      return state;
    }
  }
}