// Given a list of timestamps for people entering a store, and a list of timestamps of people exiting a store, write code to compute total number of people currently in the store at time t.

// Also re-phrased as given a list of timestamps people logged on to a site, and a list of timestamps when people logged off of the site, write code to compute maximum concurrent users.

// e.g.

// listIn = [1,3,4,6,7,8,9,10,55,75,130]
// listOut= [2,4,6,7,9,11,15,65,77,150]
// dont know if this is the correct method.

const concurrentUsers = (listIn, listOut) => {
  let listInLength = listIn.length;
  let listOutLength = listOut.length;
  let i = 0,
    j = 0;
  let currentUsers = 0,
    minTime = Number.MAX_SAFE_INTEGER,
    maxConcurrentUsers = 0;
  while (i < listInLength && j < listOutLength) {
    if (listIn[i] <= listOut[j]) {
      currentUsers++;
      if (currentUsers > maxConcurrentUsers) {
        maxConcurrentUsers = currentUsers;
        minTime = listIn[i];
      }
      i++;
    } else {
      currentUsers--;
      j++;
    }
  }
  console.log(maxConcurrentUsers, minTime);
};

concurrentUsers(
  [1, 3, 4, 6, 7, 8, 9, 10, 55, 75, 130],
  [2, 4, 6, 7, 9, 11, 15, 65, 77, 150]
);
