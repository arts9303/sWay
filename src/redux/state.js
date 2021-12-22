let ReRender = () => {};

let state = {

    profilePage: {
        posts: [
            {id: 0, message: 'Hey good job!', likes: 5},
            {id: 1, message: 'Tony, what about dinner today', likes: 1}
        ],
        text: ''
    },

    dialogsPage: {
        users: [
            {id: 1, name: 'John Smith'},
            {id: 2, name: 'Lindy Toleranto'},
            {id: 3, name: 'Makroan De Findero'},
            {id: 4, name: 'Jiano Vi Culio'},
            {id: 5, name: 'Mirinda Parker'}
        ],
        messages: [
            {id: 1, message: 'Hello from New York'},
            {id: 2, message: 'Hello my old friend'},
            {id: 2, message: 'Hello my old friend'},
            {id: 2, message: 'Hello my old friend'}
        ]
    }

}

window.state = state;

export let addPost = (postMessage) => {

    let newPost = {
        id: 2,
        message: postMessage,
        likes: 0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.text = '';
    ReRender(state);
};

export let sendTextToState = (text) => {
    state.profilePage.text = text;
    ReRender(state);
}

export const subscriber = (observer) => {
    ReRender = observer;
}

export default state;