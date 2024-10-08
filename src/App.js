import logo from './logo.svg';
import './App.css';
import kakaoLoginImage from './kakao_login_medium_narrow.png';
function App() {
      
  const SocialKakao = ()=>
    {
        const Rest_api_key='38d2e7fcaa11c185c2283a38dffaa66f' //REST API KEY
        const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
        // oauth 요청 URL
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        const handleLogin = ()=>{
            window.location.href = kakaoURL
        }
        return(
        <>
        <div onClick={handleLogin} style={{ cursor: 'pointer' }}>
            <img src={kakaoLoginImage} alt="Kakao Login" />
        </div>
        </>
        )
    };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SocialKakao/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
