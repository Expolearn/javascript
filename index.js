/*Assignment
create list of users with each users having basic details and roles such as admin, staff, student, cleaner.
 Create a basic details viewer which shows to a particular person some details and not to the other person.
*/

let user = {
    userName: "Tshifhiwa",
    userSurname: "Sinugo",
    email: "Tshifhiwasinugo@mail.com",
    address: "23 Belhambra",
};

const basic_details = {
    name: user.userName,
    Surname: user.userSurname,
    e_mail: user.email,

    Home_address: user.address,
    others: (user.prototype = {
        roles: "Admin",
        contact: "+27159621111",
        salary: "R10000"
    }),
}

;
for (let i in basic_details) {
    console.log(basic_details[i]);
}




let userOne = {
    userName: "lunah",
    email: "lunah@mail.com",
    userSurname: "Mulaudzi",
    address: "Pitorious street",
};

const basic_details_one = {
    name: userOne.userName,
    Surname: userOne.userSurname,
    e_mail: userOne.email,
    Home_address: userOne.address,
    others: (userOne.prototype = {
        roles: "Cleaner",
        contact: "+27762852677",
        salary: "R6000"
    }),
}

;
for (let i in basic_details_one) {
    console.log(basic_details_one[i]);
}



let userTwo = {
    userName: "Murendeni",
    userSurname: "Ramavhale",
    email: "ramavhalemurendeni@mail.com",
    address: "99 Bendor",
};

const basic_details_two = {
    name: userTwo.userName,
    Surname: userTwo.userSurname,
    e_mail: userTwo.email,
    Home_address: userTwo.address,
    others: (userTwo.prototype = {
        roles: "Student",
        contact: "0711272318",

    }),
}

;
for (let i in basic_details_two) {
    console.log(basic_details_two[i]);
}


let userThree = {
    userName: "Rinae",
    userSurname: "Tshivhinde",
    email: "Rinae@mail.com",
    address: "99 Mukamba street",
};

const basic_details_three = {
    name: userThree.userName,
    Surname: userThree.userSurname,
    e_mail: userThree.email,
    Home_address: userThree.address,
    others: (userThree.prototype = {
        roles: "Staff",
        contact: "0722243823",
        salary: "R7500"
    }),
}

;
for (let i in basic_details_three) {
    console.log(basic_details_three[i]);
}