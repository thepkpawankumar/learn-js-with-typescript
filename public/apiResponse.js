"use strict";
const userResponse = {
    data: {
        name: "Foo",
        email: "foo@bar.com"
    },
    isError: false
};
const stringResponse = {
    data: "Hello"
};
const statusResponse = {
    data: {
        status: 200
    }
};
console.log(stringResponse);
console.table(statusResponse);
//# sourceMappingURL=apiResponse.js.map