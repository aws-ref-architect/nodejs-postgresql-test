import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="App-main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header">Github Repositories</h1>
        <dl className="repo-list"> 
          <dt className="repo-list-header">Sample apps for web development/Site Reliability Engineering:</dt>
          <dd className="repo-item">
            <a className="repo-item-link"
              href="https://github.com/aws-ref-architect/nodejs-postgresql-test">- CircleCI, NodeJS, PostgreSQL, and React test environments</a>
          </dd>
          <dt className="repo-list-header">Sample Terraform app to host your very own personal cloud:</dt>
          <dd className="repo-item">
            <a className="repo-item-link"
              href="https://github.com/aws-ref-architect/terraform-test">- CircleCI and Terraform definitions for an AWS private cloud</a>
          </dd>
        </dl>
      </header>
    </main>
  );
}

export default App;
