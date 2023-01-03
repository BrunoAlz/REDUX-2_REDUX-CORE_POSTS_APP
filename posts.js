const { createStore } = require("redux");

// PASSOS:

// 1- INITAL STATE

const initialState = {
  posts: [],
};

// 2- ACTIONS
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

// ADD POSTS
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
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

// 4- STORE

const store = createStore(postReducer);

// 5- SUBISCRIBE
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
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

// REMOVE POSTS
store.dispatch(removePostAction(2));
/* {
  posts: [
    { id: 1, title: 'TESTANDO O REDUX' },    
    { id: 2, title: 'TESTANDO O REDUX-CORE' }
  ]
}
{ posts: [ { id: 1, title: 'TESTANDO O REDUX' } ] } */
