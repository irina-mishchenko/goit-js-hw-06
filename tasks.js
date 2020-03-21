"use strict";

import users from './users.js';

// task 1

const getUserNames = users => {
    return users.map(user => user.name);
  };
  
console.log(getUserNames(users));


// task 2
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
  };
  
console.log(getUsersWithEyeColor(users, 'blue')); 

// task 3

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.name);
  };
  
console.log(getUsersWithGender(users, 'male'));

// task 4

const getInactiveUsers = users => {
    return users.filter(user => !user.isActive);
  };
  
console.log(getInactiveUsers(users)); 

// task 5

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// task 6

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age > min && user.age < max);
  };
  
console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));

// task 7

const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  
console.log(calculateTotalBalance(users)); 

// task 8

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user['friends'].includes(friendName)).map(user => user.name);
  };
  
console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 

// task 9

const getNamesSortedByFriendsCount = users => {
    return users.sort((userA, userB) => userA['friends'].length - userB['friends'].length).map(user => user.name);
  };
  
console.log(getNamesSortedByFriendsCount(users));

// task 10

const getSortedUniqueSkills = users => {
    const allUserSkills = users
      .reduce ((allSkills, user) => {
        allSkills.push (...user.skills);
        return allSkills;
      }, [])
  
    const uniqueSkillsOfUsers = [];
    allUserSkills.forEach (skill => {
      if (!uniqueSkillsOfUsers.includes (skill)) {
        uniqueSkillsOfUsers.push (skill);
      }
    });
  
return uniqueSkillsOfUsers.sort ();
};

console.log(getSortedUniqueSkills(users));




