<p align="center">
    <img src="https://www.litromagazine.com/wp-content/uploads/2016/09/Medium-logo.png" width="320px" alt="Orca logo" />
</p>

<h1 align="center">Social application Medium-like, implements base social-network functions</h1>
<p align="center">The application using async queries to the backend service "Realworld API"</p>

<p align="center">
    <img src="https://camo.githubusercontent.com/7eefb664821bf5871fb790882456ecb2dfa8872e6e2657af8bcdf3c3b3edf63b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d3362326535613f7374796c653d706c6173746963266c6f676f3d7265616374" />
    <img src="https://camo.githubusercontent.com/642e843f9aa33ce2969085744bf1eebf22d91f28c3c3cca8f545e9ebcdef83cf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5765627061636b2d2532333243334134323f7374796c653d666c61742d737175617265266c6f676f3d7765627061636b" alt="">
    <img src="https://camo.githubusercontent.com/cec92673ea713fa89ba2ae2033daf5851f6f39393ff5b93231aa707d424638d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6f64656a732d626c61636b3f7374796c653d666c61742d737175617265266c6f676f3d4e6f64652e6a73" alt="">
</p>

<br>

# Example

### <a href="">Deployed application</a>

# Stack

- ⚡ [React](https://ru.reactjs.org/),
- ⭐ [Axios](https://github.com/axios/axios),
- 🚀 [Webpack](https://vuejs.org/),
- 💻 [SCSS](https://sass-lang.com/).
 
# Documentation 

As a base for state management using React Hooks. For API queries chosen axios and in the app implements the following queries : <br>
### User and Authentication:

- ```POST ​/users​/login``` - Existing user login<br>
- ```GET ​/user``` -  Get current user
- ```PUT ​/user``` - Update current user password
- ```POST ​/users``` - Register a new user

### Articles

- ```GET ​/tags``` - Get tags
- ```GET ​/articles​/{slug}``` - Get an article
- ```PUT ​/articles​/{slug}``` - Update an article
- ```DELETE ​/articles​/{slug}``` - Delete an article
- ```GET ​/articles​/feed``` - Get recent articles from users you follow
- ```GET ​/articles``` - Get recent articles globally
- ```POST ​/articles``` - Create an article

### Favorites
- ```POST ​/articles​/{slug}​/favorite``` - Favorite an article
- ```DELETE ​/articles​/{slug}​/favorite``` - Unfavorite an article

### Profile

- ```GET ​/profiles​/{username}``` - Get a profile
- ```POST ​/profiles​/{username}​/follow``` - Follow a user
- ```DELETE ​/profiles​/{username}​/follow``` - Unfollow a user

<br>
In the application was implements custom hooks:

### useFetch

Using useCallback pass the data to the backend:
```
const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, []); 
  ```

### useLocalStorage

Current hook facilitate interaction with localStorage
```
(key, initialValue = '') => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initialValue;
    })

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue]
}
  ```

# Features

- #### Sign-up, sign-in and sign-out 
- #### Post and delete your article,
- #### Like and dislike other users,
- #### Сustomize your profile and upload an avatar,
- #### Filtration feed by tags,
- #### Subscribe to other users,
- #### Add articles to favorites_



