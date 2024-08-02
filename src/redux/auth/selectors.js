export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.tokoen;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsChecking = state => state.auth.isChecking;
export const selectError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;
