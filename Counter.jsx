import React, { useState,useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [sayi,setSayi]=useState(0);
 

  useEffect(() => {
    const countWords = () => {
      let total = 0;
      blogs.forEach(blog => {
        const words = blog.title.split(' ');
        total += words.length;
      });
      setSayi(total);
    };

    countWords();
  }, [blogs]);

  const handleAddBlog = () => {
    if (newBlogTitle) {
      const newBlog = {
        id: Date.now(),
        title: newBlogTitle
      };

      setBlogs([...blogs, newBlog]);
      setNewBlogTitle('');
    }
  };

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title}
            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New blog entry"
          value={newBlogTitle}
          onChange={(e) => setNewBlogTitle(e.target.value)}
        />
        <button onClick={handleAddBlog}>Send</button>
      </div>
      <h3>Total word count in all blogs {sayi}</h3>
      
    </div>
  );
};

export default Blog;






 
