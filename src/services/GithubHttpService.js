export const GithubHttpService = {
    fetchUserData: (url) => {
        return fetch(url)
            .then(res => res.json())
    }
}