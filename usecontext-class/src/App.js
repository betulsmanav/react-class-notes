import './App.css';
// import WithPropsApp from './withprops/WithPropsApp'
import WithContextApp from './withtcontext/WithContextApp';

function App() {
  return (
    <div className="App">
      <h2>useContext Class</h2>
      {/* <WithPropsApp/> */}
      <WithContextApp/>
    </div>
  );
}

export default App;
