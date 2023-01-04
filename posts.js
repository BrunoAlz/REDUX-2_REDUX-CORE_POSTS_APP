const { createStore, combineReducers } = require("redux");

// PASSOS:

// 1- INITAL STATE

const initialState = {
  posts: [],
};

const usersInitialState = {
  users: [],
};

// 2- ACTIONS
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";

// ADD POSTS
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

// ADD USERS
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// REMOVE POSTS
const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

// 3- REDUCERS

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };
    default:
      return state;
  }

  // if (action.type === ADD_POST) {
  //   return {
  //     // Pegamos o array de post que está no state e desestruturamos os dados
  //     // assim os dados do estado anterior permanecerão junto com os dados da Action passada
  //     posts: [...state.posts, action.payload],
  //   };
  // } else if (action.type === REMOVE_POST) {
  //   return {
  //     posts: state.posts.filter((post) => {
  //       return post.id !== action.id;
  //     }),
  //   };
  // } else {
  //   return state;
  // }
};

const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// ROOT REDUCER
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

// 4- STORE

const store = createStore(rootReducer);

// 5- SUBISCRIBE
store.subscribe(() => {
  const data = store.getState();
  console.log("posts", data.posts);
  console.log("users", data.users);
});

// 6- DISPATCH

// ADD POSTS
store.dispatch(
  addPostAction({
    id: 1,
    title: "TESTANDO O REDUX",
  })
);
// { posts: [ { id: 1, title: 'TESTANDO O REDUX' } ] }

store.dispatch(
  addPostAction({
    id: 2,
    title: "TESTANDO O REDUX-CORE",
  })
);
/* {
  posts: [
    { id: 1, title: 'TESTANDO O REDUX' },
    { id: 2, title: 'TESTANDO O REDUX-CORE' }
  ]
} */

// ADD POSTS
store.dispatch(
  addUserAction({
    name: "Bruno Alves",
    email: "Bruno@gmail.com",
  })
);

// REMOVE POSTS
store.dispatch(removePostAction(2));
/* {
  posts: [
    { id: 1, title: 'TESTANDO O REDUX' },    
    { id: 2, title: 'TESTANDO O REDUX-CORE' }
  ]
}
{ posts: [ { id: 1, title: 'TESTANDO O REDUX' } ] } */
