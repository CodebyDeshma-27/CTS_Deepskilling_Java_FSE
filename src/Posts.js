import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
        });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    alert(error);
  }

  render() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#0d6efd" }}>
        Student Blog Portal
      </h1>

      {this.state.posts.slice(0, 10).map((post, index) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            margin: "15px 0",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>Blog Post {index + 1}</h3>
          <p>
            This is a sample blog post fetched successfully from the server using
            the Fetch API. The post ID is <strong>{post.id}</strong>.
          </p>
        </div>
      ))}
    </div>
  );
}
}

export default Posts;