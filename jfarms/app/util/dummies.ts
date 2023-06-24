const dummyUser: User = {
    username: "Kofi Manu",
    uuid: "1234asdf",
    email: "km57@jfarms.agr",
    profileImage: new URL("https://api.dicebear.com/6.x/initials/svg?seed=KM&backgroundType=gradientLinear&backgroundColor=3b7777,050A18")
}

const defaultUser: User = {
    username: "Default",
    uuid: "000000",
    email: "default@jfarms.agr",
    profileImage: new URL("https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80")
}


export { dummyUser, defaultUser };