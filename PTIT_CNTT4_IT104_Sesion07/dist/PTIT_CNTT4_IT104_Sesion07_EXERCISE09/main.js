"use strict";
var SocialApp;
(function (SocialApp) {
    let postCounter = 0;
    let commentCounter = 0;
    class Comment {
        constructor(userId, content) {
            this.id = ++commentCounter;
            this.userId = userId;
            this.content = content;
            this.replies = [];
        }
        addReply(reply) {
            this.replies.push(reply);
        }
    }
    class Post {
        constructor(userId, content) {
            this.id = ++postCounter;
            this.userId = userId;
            this.content = content;
            this.likes = [];
            this.comments = [];
        }
        addLike(userId) {
            if (!this.likes.some(id => id === userId)) {
                this.likes.push(userId);
            }
        }
        addComment(comment) {
            this.comments.push(comment);
        }
    }
    class User {
        constructor(id) {
            this.id = id;
            this.posts = [];
            this.followers = [];
        }
        createPost(content) {
            const post = new Post(this.id, content);
            this.posts.push(post);
        }
        comment(postId, commentContent) {
            const allPosts = this.getAllPosts();
            const post = allPosts.find(p => p.id === postId);
            if (post) {
                const comment = new Comment(this.id, commentContent);
                post.addComment(comment);
            }
        }
        follow(user) {
            if (!this.followers.some(f => f.id === user.id)) {
                this.followers.push(user);
            }
        }
        likePost(postId) {
            const allPosts = this.getAllPosts();
            const post = allPosts.find(p => p.id === postId);
            if (post) {
                post.addLike(this.id);
            }
        }
        viewFeed() {
            console.log(` ${this.id}:`);
            this.followers.forEach(user => {
                user.posts.forEach(post => {
                    console.log(`${user.id} đăng: "${post.content}" - ${post.likes.length} - ${post.comments.length}`);
                });
            });
        }
        getAllPosts() {
            const allPosts = [];
            for (const user of this.followers) {
                for (const post of user.posts) {
                    allPosts.push(post);
                }
            }
            return allPosts;
        }
    }
    const Khanh = new User("Khanh");
    const Duy = new User("Duy");
    Duy.createPost("ok");
    Duy.createPost("cc");
    Khanh.follow(Duy);
    Khanh.viewFeed();
    Khanh.likePost(1);
    Khanh.comment(1, "tốt");
    Khanh.viewFeed();
})(SocialApp || (SocialApp = {}));
