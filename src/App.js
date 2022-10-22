import ContentsTable from "./ContentsTable";
import MainContent from "./MainContent";

function App() {
  return (
    <div>
      <header className="hero is-success">
        <div className="hero-body">
          <p className="title">特講（寄付講座：帝国データバンクDE養成講座）</p>
        </div>
      </header>
      <div className="columns">
        <div className="column is-2">
          <ContentsTable />
        </div>
        <div className="column">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
