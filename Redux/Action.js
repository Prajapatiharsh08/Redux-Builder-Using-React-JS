export const myAction = (inputData) => ({
    type: "ADD",
    inputData
})
export const myEdit = (i,data) => ({
    type: "EDIT",
    inputData: { i, data }
})
export const myDelete = (i) => ({
    type: "DELETE",
    inputData: { i }
})