import { Button } from "./components/Button"
import { Layout } from "./components/Layout"

function App() {
  return (
    <Layout>
      <div className="min-h-[90vh]">
        <h4 className="text-2xl mb-8">Buttons</h4>
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-2">
            <p>{`<Button/>`}</p>
            <Button>Default</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
