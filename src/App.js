import Navbar from './components/navbar/Navbar';
import ToolBox from './components/toolBox/ToolBox';
import EditorScreen from './components/editorSection/EditorSection';

function App() {
  return (
    <>
      <div className='h-screen w-full'>
        <section>
          <Navbar/>
        </section>
        <section>
          <ToolBox/>
        </section>
        <section>
          <EditorScreen/>
        </section>
      </div>
    </>
  );
}

export default App;
