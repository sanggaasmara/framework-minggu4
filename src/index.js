
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import BlogPostMahasiswa from './container/BlogPost/BlogPostMahasiswa';


ReactDOM.render( <BlogPostMahasiswa />, document.getElementById('content'));

reportWebVitals();