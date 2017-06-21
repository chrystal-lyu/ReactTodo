var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Workout'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should toggle show complete', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('shoud generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generage toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 3
    }
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
