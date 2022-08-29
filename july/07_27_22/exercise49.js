function validUserNames(usernames) {
    let filteredUsernames = usernames.filter(function (username) {
        return username.length < 10;
    })
    return filteredUsernames;
}
function validUserNames(usernames) {
    return usernames.filter(function (username) {
        return username.length < 10;
    })

}

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
