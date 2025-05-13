import './App.css'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './components/ui/resizable'
function App() {

  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border md:min-w-[450px] ">
        <ResizablePanel className="w-2" style={{backgroundColor: '#e8f8f5'}} defaultSize={20}>
            <div className="flex flex-col items-center justify-center h-full w-full gap-3">
             <div className="flex items-center justify-center">
              <img src="/img side bar.png" alt="Sidebar visual aid" />
            </div>
            <div>
              Andrés Peña
            </div>
            <div>
              Ingeniero de software
            </div>
            <div>
              
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="w-2" style={{backgroundColor: '#f0f3f4'}}>
          <div className="flex flex-col items-center justify-center h-full w-full gap-3">
            <div className="flex items-center justify-center">
              <img src="/img body.png" alt="Body visual aid" />
            </div>
            <div>
              <span>Two</span>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}

export default App
