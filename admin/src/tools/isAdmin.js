export default function isAdmin() {

    const auth = localStorage.getItem("persist:root") ?
        JSON.parse(localStorage.getItem("persist:root")).user ?
            JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser ?
                JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
                    : null
                : null
            : null;
    return auth
}