const dummy = (blogs) => {
    return 1;
};

const totalLikes = (blogs) => {
    return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = blogs => {
    if (blogs.length === 0) {
        return null; 
    }
    
    const maxLikesBlog = blogs.reduce((maxBlog, currentBlog) => {
        return currentBlog.likes > maxBlog.likes ? currentBlog : maxBlog;
    })

    return {
        title: maxLikesBlog.title,
        author: maxLikesBlog.author,
        likes: maxLikesBlog.likes
    }
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return null;
    }

    const blogCounts = {};

    blogs.forEach((blog) => {
        if (blog.author in blogCounts) {
            blogCounts[blog.author]++;
        } else {
            blogCounts[blog.author] = 1;
        }
    });

    console.log('Blog counts:', blogCounts);

    let maxAuthor = null;
    let maxBlogs = 0;

    for (const author in blogCounts) {
        if (blogCounts[author] > maxBlogs) {
            maxAuthor = author;
            maxBlogs = blogCounts[author];
        }
    }

    console.log('Max Author:', maxAuthor);
    console.log('Max Blogs:', maxBlogs);

    return {
        author: maxAuthor,
        blogs: maxBlogs
    };
};

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
};
