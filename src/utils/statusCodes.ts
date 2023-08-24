export enum BookStatusCode {
    Idle = 0,
    InProgress = 1,
    Fetched = 2,
    SuccessCreate = 3,
    SuccessUpdate = 4,
    SuccessDelete = 5,
    Error = 6
  }

export const BookStatusMessages = {
[BookStatusCode.Idle]: "idle",
[BookStatusCode.InProgress]: "Trying to execute action",
[BookStatusCode.Fetched]: "The book were retrieved successfully",
[BookStatusCode.SuccessCreate]: "Book created successfully!",
[BookStatusCode.SuccessUpdate]: "Book updated successfully!",
[BookStatusCode.SuccessDelete]: "Book deleted successfully!",
[BookStatusCode.Error]: "Error while trying to execute this action",
}