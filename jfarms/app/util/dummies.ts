const dummyUser: User = {
    username: "Kofi Manu",
    uuid: "1234asdf",
    email: "km57@jfarms.agr",
    profileImage: new URL("https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
}

const defaultUser: User = {
    username: "Default",
    uuid: "000000",
    email: "default@jfarms.agr",
    profileImage: new URL("https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80")
}


export { dummyUser, defaultUser };