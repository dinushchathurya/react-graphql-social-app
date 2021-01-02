const Post = require('../../models/Post');
const isAuth = require('../../utils/is-auth');

module.exports = {
    Query : {
        async getPosts() {
            try {
               const posts = await Post.find();
               return posts; 
            } catch (err) {
                throw new Error(err);
            }
        },
        async getPost(_, { postId }) {
            try {
                const post = await Post.findById(postId);
                if(post){
                    return post;
                } else {
                    throw new Error ('Post not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation : {
        async createPost(_, { body }, context){
            const user = isAuth(context);
            console.log(user);

            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString()
            });

            const post = await newPost.save();
            return post;
        }
    }
}