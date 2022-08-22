import GeoLocationView from './components/geolocation';
import AudioPlayer from './components/audioplayer';
import tracks from './musicTracks';
import './App.css';

function App() {
  return (
    <div className="App">
      <AudioPlayer tracks={tracks} />
      <GeoLocationView />
    </div>
  );
}

export default App;
