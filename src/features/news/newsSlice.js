import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {
    addNews: (state, action) => {
      // Check if news item already exists
      const isDuplicate = state.some(item => 
        item._id === action.payload._id || 
        (item.title === action.payload.title && item.createdAt === action.payload.createdAt)
      );

      // Add only if not a duplicate
      if (!isDuplicate) {
        state.unshift(action.payload);
        
        // Keep only the latest 10 unique news items
        if (state.length > 10) {
          state.splice(10);
        }
      }
    },
    setNews: (state, action) => {
      // Remove duplicates when setting initial news
      const uniqueNews = action.payload.filter((item, index, self) =>
        index === self.findIndex((t) => (
          t._id === item._id || 
          (t.title === item.title && t.createdAt === item.createdAt)
        ))
      );

      // Return only latest 10 unique items
      return uniqueNews.slice(0, 10);
    },
    clearOldNews: (state) => {
      // Optional method to manually clear old news
      return state.slice(0, 10);
    }
  }
});

export const { addNews, setNews } = newsSlice.actions;
export default newsSlice.reducer;
