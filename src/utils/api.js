const getUser = async () => {
    const request = new Promise((resolve) => {
        setTimeout(() => {
            resolve({});
        }, 1000);
    });

    try {
        return await request;
    } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        throw error;
    }
}

const login = () =>
new Promise((resolve) => {
    setTimeout(() => {
        localStorage.setItem("accessToken", "test-token");
        localStorage.setItem("refreshToken", "test-refresh-token");
        resolve({});
    }, 1000);
});

const logout = () =>
new Promise((resolve) => {
    setTimeout(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        resolve();
    }, 1000);
});

export const api = {
    getUser,
    login,
    logout
};
