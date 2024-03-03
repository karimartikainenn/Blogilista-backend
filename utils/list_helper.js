const dummy = (blogs) => {
    return 1;
};

const totalLikes = (blogs) => {
    return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = blogs => {
    if (blogs.length === 0) {
        return null; // Jos taulukko on tyhjä palautetaan null
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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
};
