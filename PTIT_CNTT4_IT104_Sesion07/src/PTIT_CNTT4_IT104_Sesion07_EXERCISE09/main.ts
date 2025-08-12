namespace SocialApp {
  let postCounter = 0;
  let commentCounter = 0;
  class Comment {
    public id: number;
    public userId: string;
    public content: string;
    public replies: Comment[];
    constructor(userId: string, content: string) {
      this.id = ++commentCounter;
      this.userId = userId;
      this.content = content;
      this.replies = [];
    }
    addReply(reply: Comment): void {
      this.replies.push(reply);
    }
  }
  class Post {
  public id: number;
  public userId: string;
  public content: string;
  public likes: string[];
  public comments: Comment[];

  constructor(userId: string, content: string) {
    this.id = ++postCounter;
    this.userId = userId;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  addLike(userId: string): void {
    if (!this.likes.some(id => id === userId)) {
      this.likes.push(userId);
    }
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}

  class User {
    public id: string;
    public posts: Post[];
    public followers: User[];

    constructor(id: string) {
      this.id = id;
      this.posts = [];
      this.followers = [];
    }

    createPost(content: string): void {
      const post = new Post(this.id, content);
      this.posts.push(post);
    }

    comment(postId: number, commentContent: string): void {
      const allPosts = this.getAllPosts();
      const post = allPosts.find(p => p.id === postId);
      if (post) {
        const comment = new Comment(this.id, commentContent);
        post.addComment(comment);
      }
    }

    follow(user: User): void {
      if (!this.followers.some(f => f.id === user.id)) {
         this.followers.push(user);
        }
    }

    likePost(postId: number): void {
      const allPosts = this.getAllPosts();
      const post = allPosts.find(p => p.id === postId);
      if (post) {
        post.addLike(this.id);
      }
    }

    viewFeed(): void {
      console.log(` ${this.id}:`);
      this.followers.forEach(user => {
        user.posts.forEach(post => {
          console.log(`${user.id} đăng: "${post.content}" - ${post.likes.length} - ${post.comments.length}`);
        });
      });
    }

    private getAllPosts(): Post[] {
    const allPosts: Post[] = [];
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
}
