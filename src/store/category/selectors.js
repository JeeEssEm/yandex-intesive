export const selectCategoryModule = (state) => state.category;

export const selectCategoryById = (state, categoryId) =>
  selectCategoryModule(state).entities[categoryId];

export const selectCategories = (state) =>
  Object.values(selectCategoryModule(state).entities);

export const selectCategoryBookIds = (state, categoryId) =>
  selectCategoryModule(state).entities[categoryId].books;
