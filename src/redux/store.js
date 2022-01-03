let store = {

        _state: {

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

        },
        getState(){
            return this._state;
        },

        dispatch(action) {
            if(action.type === 'SEND-TEXT-TO-STATE'){
                this._state.profilePage.text = action.valueText;
                this.ReRender(this._state);
            } else if (action.type === 'ADD-POST') {
                let newPost = {
                    id: 2,
                    message: action.postMessage,
                    likes: 0
                }

                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.text = '';
                this.ReRender(this._state);
            }
        },

        subscriber (observer) {
            this.ReRender = observer;
        },

        ReRender (){}

}

export default store;