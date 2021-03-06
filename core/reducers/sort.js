import {
  BLUEPRINTS_SORT_SET_KEY,
  BLUEPRINTS_SORT_SET_VALUE,
  DEPENDENCIES_SORT_SET_KEY,
  DEPENDENCIES_SORT_SET_VALUE,
  COMPONENTS_SORT_SET_KEY,
  COMPONENTS_SORT_SET_VALUE
} from "../actions/sort";

const sort = (state = [], action) => {
  switch (action.type) {
    case BLUEPRINTS_SORT_SET_KEY:
      return Object.assign({}, state, { blueprints: Object.assign({}, state.blueprints, { key: action.payload.key }) });
    case BLUEPRINTS_SORT_SET_VALUE:
      return Object.assign({}, state, {
        blueprints: Object.assign({}, state.blueprints, { value: action.payload.value })
      });
    case COMPONENTS_SORT_SET_KEY:
      return Object.assign({}, state, { components: Object.assign({}, state.components, { key: action.payload.key }) });
    case COMPONENTS_SORT_SET_VALUE:
      return Object.assign({}, state, {
        components: Object.assign({}, state.components, { value: action.payload.value })
      });
    case DEPENDENCIES_SORT_SET_KEY:
      return Object.assign({}, state, {
        dependencies: Object.assign({}, state.dependencies, { key: action.payload.key })
      });
    case DEPENDENCIES_SORT_SET_VALUE:
      return Object.assign({}, state, {
        dependencies: Object.assign({}, state.dependencies, { value: action.payload.value })
      });
    default:
      return state;
  }
};

export default sort;
