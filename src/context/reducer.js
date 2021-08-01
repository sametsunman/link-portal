function reducer(state, action) {

    switch (action.type) {
      case 'SET_STATE_FROM_STORAGE':
        return action.payload ? action.payload : state;
      case 'CREATE_NEW_LINK':
          let newLink = action.payload;
          newLink.id = state.links.length> 0 ? (state.links[state.links.length - 1].id+1) : 1;
          newLink.updatedDate = new Date ();
          newLink.vote = 0;
         return { ...state, links: [...state.links, newLink] }
      case 'REMOVE_LINK':
        return { ...state, links: state.links.filter((link) => link.id !== action.payload) }
      case 'VOTE_LINK':
          let votedLink = state.links.find((link) => link.id === action.payload.id);
          votedLink.vote=votedLink.vote+action.payload.vote;
          votedLink.updatedDate= new Date();
          return { ...state, links: state.links.map(link => link.id === action.payload.id ? votedLink : link)};
      default:
        return state;
    }
  

  }
  
  export default reducer;