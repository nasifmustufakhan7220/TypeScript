//Required Properties, it means that you decleard the property type, so when you create the object literale that time you must create that object litaral with the proprty which you have decleared the property type.

const student: {
    name: string;
    age: number;
} = {
    name: "Nasif",
    age: 24
};


//Optional Properties ?, it means that the ? means the property may or may not exist when you create the object litaral.

const student1: {
    name: string;
    age: number;
    email?: string;
} = {
    name: "Nasif",
    age: 24
};


//readonly Properties, it means when you used the readonly with any property we can not reassign that property value, because it do not allow to do this. For example: below example you can see that we use readonly with id property, so from now you can not ressign the value of that id, but you can ressign other properties value, like you can  ressign the name property value.

const student2: {
    readonly id: number;
    name: string;
} = {
    id: 101,
    name: "Nasif"
};


// Nested Objects

const student3:{
    name: string;
    age: number;
    address:{
        city: string;
        country: string;
    }
} = {
    name: "Nasif",
    age: 24,
    address:{
        city: "netrakona",
        country: "Bangaldesh"
    }
}


//Optional Nested Properties

const student4:{
    name: string;
    age: number;
    address?:{
        city: string;
        country?:  string;
    }
}={
    name: "Nasif",
    age: 24,
    address:{
        city : "Muktarpara",
        country: "BD"
    }
}