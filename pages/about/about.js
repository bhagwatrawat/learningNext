import {useEffect,useState} from 'react'

export default function About(){
    const [profile,setProfile] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    async function fetchdata(){
      const response = await fetch('https://api.github.com/users/bhagwatrawat');
      const data = await response.json();
      if(data){
        setProfile(data);  
        setLoading(false);
      }
      
    }
    
    fetchdata();
  },[]);
return(
    <div>
        <h1>About me</h1>
      <div>
      {loading ? (<h1>Loading...</h1>) :
      (<ul>
        <li><img src={profile.avatar_url} alt="avatar" /></li>
        <li><span>html url: </span><a href={profile.html_url} target='_blank' rel='noopener noreferrer'>{profile.html_url}</a></li>
        <li><span>repos url: </span><a href={profile.repos_url} target='_blank' rel='noopener noreferrer'>{profile.repos_url}</a></li>
        <li><span>name: </span>{profile.name}</li>
        <li><span>location: </span>{profile.location}</li>
        <li><span>email : </span>{profile.email}</li>
        <li><span>bio : </span>{profile.bio}</li>

      </ul>
      )
     }
     </div>
    </div>
)
    


}
