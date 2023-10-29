// import css/img/...
import logo from './logo.svg';
import './App.css';

// library
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

// import commponent
import RenderCourse from './F8/RenderCourse';
import Header from './component/layout/header';
import Content from './component/layout/content';
import Footer from './component/layout/footer';
import PostsList from './F8/post/post_list';
//
const PostListData = [
  {
    img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png', 
    title: 'Authentication & Authorization trong ReactJS', 
    desc: 'Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền...', 
    published :'15 ngày trước·9 phút đọc'
  },
  {
    img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/8334/64f01064b0724.png', 
    title: 'Hướng dẫn chi tiết cách sử dụng Dev Mode trong khóa Pro', 
    desc: 'Chào bạn! Nếu bạn đã là học viên khóa Pro của F8, chắc hẳn bạn đã biết tới "Dev Mode" - giúp thực hành code song song khi xem...', 
    published: '2 tháng trước·4 phút đọc'
  },
  {
    img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7940/64a645ea70312.png', 
    title: 'Cách chỉnh theme Oh-my-posh cho Powershell', 
    desc: 'Hello ae mọi người nhé, mọi người (đặc biệt là lập trình viên Software) chắc hẳn đã nghe tới Powershell, nhưng bù lại cái màn hình...', 
    published: '3 tháng trước·2 phút đọc'
  },
  {
    img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg', 
    title: 'Một số "cẩm nang" hay khi làm việc với HTML/CSS😂', 
    desc: 'Bài viết này đơn giản là nơi để mình lưu lại những kinh nghiệm mình đã làm việc với HTML/CSS cũng như chia sẻ phần nào cho bạn...', 
    published: '4 tháng trước·4 phút đọc'
  },
  {
    img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7922/64a23b234c52e.png', 
    title: '"Kết nối trước" với preconnect, prefetch để làm gì?', 
    desc: 'Ở đây chắc hẳn ai cũng từng dùng google fonts để nhúng fonts vào...', 
    published: '4 tháng trước·3 phút đọc'
  },
]
function App() {
  return (
    <React.Fragment>
      <Header/>
      <PostsList input= {PostListData}/>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
