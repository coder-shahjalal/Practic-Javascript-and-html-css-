/* ============================perfectFriend================================================= */

let friendList = [
  "abu",
  "abid",
  "sabit",
  "usmanur",
  "abuhasan",
  "faysal",
  "hossain",
  "korim",
  "rohim",
  "jalal",
]; /* friend arry list  */

let perfectFriendList = [];

function perfectFriend(friend) {
  for (let i = 0; i < friend.length; i++) {
    let friends = friend[i];
    if (friends.length == 5) {
      perfectFriendList.push(friend[i]);
    }
  }
  return perfectFriendList; /* return */
}

const perfectFriends = perfectFriend(friendList); /* input list  */
console.log(perfectFriends);
