enum ItemStatus {
  Open,
  InProgress,
  Done
}

interface TodoItemModel {
  status: ItemStatus;
  summary: string;
  details: string;
}

type TodoListModel = Array<TodoItemModel>;

export { ItemStatus, TodoItemModel, TodoListModel };
