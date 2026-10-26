function checkDataType (value) {
    if (typeof value === "object") {
        return "Непримитивный тип";
    } else if (typeof value === "string" ) {
        return "Примитивный тип";
    }
    else if ( typeof value === "number") {
        return "Примитивный тип";
    }
    else if ( typeof value === "boolean" ) {
        return "Примитивный тип";
    } else {
        return "Примитивный тип";
    }
}



checkDataType('hello')

function updateProfileMutably(userObject, newName, newRole) {
    userObject.name = newName;
    userObject.role = newRole;
}


const userObject = {
    id: 1,
    name: 'Ben',
    role: 'student'
};
function updateProfileImmutably(userObject, newName, newRole) {
    const newObject = {};

    newObject.id = userObject.id;
    newObject.name = newName;
    newObject.role = newRole;

    return newObject;

    
}

const updatedUser = updateProfileImmutably(userObject, "Tom", "Dispecher");


console.log("Original:", userObject);
console.log("Updated:", updatedUser);
















