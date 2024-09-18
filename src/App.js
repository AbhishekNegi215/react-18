import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const fetchTask =()=> fetch('https://localhost:5004/' + 'api/SignatureFlow/DocumentType/GetAllDocumentOptions', {
      method: 'GET',
      credentials: 'include',
      //mode:'no-cors',
      headers: {
          'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwODAyYTU2OTk2YTFmMjM3ZDU3ZThkMDUwNDRmYmIyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NjY3MDY0MTYsImV4cCI6MTY2NjcwNzYxNiwiaXNzIjoiaHR0cHM6Ly9wZXJzZXVzLWRldi1sb2dpbi5zYWZlc2VuZHdlYnNpdGVzLmNvbSIsImF1ZCI6WyJodHRwczovL3BlcnNldXMtZGV2LWxvZ2luLnNhZmVzZW5kd2Vic2l0ZXMuY29tL3Jlc291cmNlcyIsIlVzZXJNYW5hZ2VtZW50QXBpIl0sImNsaWVudF9pZCI6InNzci5jcGEuY2xpZW50LnVpLmxvY2FsIiwic3ViIjoic3NzLnVzZXI1Lm10QGdtYWlsLmNvbSIsImF1dGhfdGltZSI6MTY2NjcwNDcwMSwiaWRwIjoibG9jYWwiLCJwcm9maWxlIjoic3NzLnVzZXI1Lm10QGdtYWlsLmNvbSIsIm5hbWUiOiJUZXN0ICBUZXN0IiwiZ2l2ZW5fbmFtZSI6IlRlc3QiLCJmYW1pbHlfbmFtZSI6IlRlc3QiLCJlbWFpbCI6InNzcy51c2VyNS5tdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicm9sZSI6IkFkbWluLFN0YWZmLFBhcnRuZXIsU2lnbmF0dXJlcyIsImNvbXBhbnlfbmFtZSI6IlRlc3Qgb3JnYW5pemVyIiwiY29tcGFueV9pZCI6MTU5LCJ1c2VyX2lkIjoxLCJkZXZpY2VfaWQiOiJiYmQwYTM3MC02MTAyLTQ0ZmEtYjRiMC1mMzFhNzhjZmNlZGEiLCJkZXZpY2VfYnJvd3NlciI6IkNocm9tZSIsImRldmljZV9icm93c2VyX3ZlcnNpb24iOiIxMDYiLCJkZXZpY2Vfb3MiOiJXaW5kb3dzIiwiZGV2aWNlX29zX3ZlcnNpb24iOiIxMCIsImlwX2FkZHJlc3MiOiIxMDMuNTcuODUuNTYiLCJpc19zc2VfcHJvZHVjdF9zdWJzY3JpYmVkIjoiVHJ1ZSIsImlzX3NzZV9wcm9kdWN0X2VuYWJsZWQiOiJUcnVlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIlVzZXJNYW5hZ2VtZW50QXBpIl0sImFtciI6WyJwd2QiXX0.xILo7s61LhCTmAEObaZtxCC7sOmc7qMUhbDJ0s6Wf9SMKsP8OZR2qCAN8H7nfHOnlCC-std6_EzEtTbfRiir6O92TVR9KimYnpA2g_eju75C2R1ZLPkIqxdCRaIvNnhxVvju8z3Zo66Qh6KqgMoa7I7oE0JFt9PGSBFoifrdhtSod116EdhYllAs-5fRlpeR0flauMeZHSAbF8bOrGFRbjKUpAnBa2LMoeErVj96cS20OIWf0fFH1KSLg1YpgjpJCDvqvITmRh3-2jux-AbHRuEW_1MNHDRmcsJ3yDNk_MWMDlcN_vTXnlm8WWRtQnhPPiqrh1vVpVoosmSPk4O2ow',
      } 
    })
    .then(res=>res.json)
    .then(data => {
      console.log(data)
    })
    .catch(error => {
    })
    fetchTask();
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color:"#61dafb"}}>
           React v18.0
        </h1>
        <a
          className="App-link"
          href="http://localhost:5004/home"
          rel="noopener noreferrer"
        >
          React 18 Features
        </a>
      </header>
    </div>
  );
}

export default App;
