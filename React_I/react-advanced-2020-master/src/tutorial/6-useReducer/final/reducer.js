export const reducer = (state, action) => {
  // if statement for each ACTION; throw error if else
  if (action.type === 'ADD_ITEM') { // the action we defined
    const newPeople = [...state.people, action.payload];
    return {
      ...state, //keep track of the old state
      // what values we wanrt to change:
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter( // filter creates new array withou the id with want to remove
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error('no matching action type');
};
