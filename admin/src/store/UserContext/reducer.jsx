function userReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, ...action.payload };
        case "LOGOUT":
            localStorage.removeItem("user");
            return null;
        default:
            return state;
    }
}

export { userReducer };
