const users = {}

for (let i = 1; i <= 10; i++) {
    users[`User ${i}`] = new Object()

    let user = users[`User ${i}`]
    let userName = prompt('Ismingiz:', 'name')
    let Userage = +prompt('Yoshingiz:', 25)

    user.name = userName
    user.age = Userage
    console.log(`Foydalanuvchi ${i}`,"\nIsmi: " + user.name,"\nYoshi: " + user.age)
}



