const initialState = {
   isAuthenticated: false,
   user: null,
   accessToken: null,
   posts: [],
   signedUpDone: false
}
export const authReducer = (state = initialState, action: any) => {

   switch (action.type) {
      case 'SIGN_IN':
         return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user_data,
            accessToken: action.payload.access_token,
         }

      case 'SIGN_UP':
         return {
            ...state,
            signedUpDone: action.payload
         }
      case 'SIGN_OUT':
         return {
            ...state,
            isAuthenticated: action.payload,
            user: null,
            accessToken: null,
            cart: null,
         }
      case 'GET_USER_PROFILE':
         return {
            ...state,
            user: { ...state.user, ...action.payload },
            // cart: action.payload.old_cart
         }
      case 'UPDATE_USER_PROFILE':
         return {
            ...state,
            user: { ...state.user, ...action.payload }
         }
      case 'GET_POST':
         return {
            ...state,
            posts: action.payload,
         }
      case 'ADD_POST':
         return {
            ...state,
            books: [...state.books, action.payload]
         }
      case 'UPDATE_POST':
         return {
            ...state,
            books: state.books.map(book =>
               book.id === action.payload.id ? action.payload : book
            ),
         }
      case 'DELETE_POST':
         return {
            ...state,
            books: state.books.filter(book => book.id !== action.payload)
         }
      case 'UPDATE_USER':
         return {
            ...state,
            user: action.payload
         }
      default:
         return state
   }
}
