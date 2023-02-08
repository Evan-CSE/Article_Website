import bg  from './assets/bg.webp'
import './App.css';
import SingleCard from './SingleCard/SingleCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed');
    setPosts(result.data);
    }
    fetchData();
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(sortedPosts);
  },[])
  const bgStyle = {
    background:`url(${bg})`,
    backgroundRepeat:'repeat'
  }
  return (
    <div style={bgStyle} className='App'>
      {
        posts.length==0?<p style={{color:'green',textAlign:'center'}}>Please wait until data is being loaded</p>:posts.map((item,id)=>(
          <SingleCard
            key={id}
            date={item.date}
            link={item.link}
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
            creator={item.creator}
          >
          </SingleCard>
        ))
      }
    </div>
  );
}

export default App;
