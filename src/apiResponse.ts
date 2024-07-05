type ApiResponse<T extends object = {status: number}> = {
    data: T,
    isError?: boolean
}

type User = {
    name: string,
   email: string
}
const userResponse: ApiResponse<User> = {

    data: {
        name: "Foo",
        email: "foo@bar.com"
    },
    isError: false
}
const stringResponse: ApiResponse<{string}> = {

    data: "Hello"
}
const statusResponse: ApiResponse = {

    data: {
        status: 200
    }
}

console.log(stringResponse);
console.table(statusResponse);
