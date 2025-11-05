import './App.css';

function App() {
  return (
    <div className="app text-style-body">
      <header className="app__header">
        <img src="./nrk-tv-logo-with-bg.svg" alt="NRK TV logo" />
      </header>
      <main>
        <h2>Da er du klar for intervju 🎉</h2>
        <ul>
          <li>
            Kikk litt på filene i <code>src</code> mappen for å bli kjent med oppsettet.
          </li>
          <li>
            Om du endrer på <code>src/client/App/App.tsx</code> og lagrer, vil du se endringene umiddelbart.
          </li>
          <li>
            Er det en stund siden du har brukt React? Les deg gjerne opp på{' '}
            <a href="https://reactjs.org/docs/getting-started.html">React sin dokumentasjon</a>.
          </li>
          <li>Husk at du når som helst kan ta kontakt i forkant av intervjuet om du har noen spørsmål.</li>
          <li>Vel møtt!</li>
        </ul>
      </main>
      <footer>
        <img src="./logo-nrk.svg" alt="NRK logo" />
      </footer>
    </div>
  );
}

export default App;
