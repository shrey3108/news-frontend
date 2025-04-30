import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/news/newsSlice';
import subscriptionReducer from '../features/subscription/subscriptionSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    subscription: subscriptionReducer,
  },
});
