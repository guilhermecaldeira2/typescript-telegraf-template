type action = 'add' | 'prev';

const historyManager = (history: string[], action: action, area?: string): String | void => {
  const historyActions = {
    add: () => {
      if (!history || !area) return;
      history.push(area);
      return area;
    },
    prev: () => {
      if (!Array.isArray(history) || history.length === 0) return;
      return history.pop();
    },
  };

  if (!historyActions[action]) throw new Error('Unhandled history action');

  return historyActions[action]();
};

export default historyManager;
