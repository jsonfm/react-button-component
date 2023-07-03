import { Button } from "./components/Button"
import { Layout } from "./components/Layout"

function App() {
  const rowClassName = "flex gap-4"
  const columnClassName = "flex flex-col gap-2 w-72";
  return (
    <Layout>
      <div className="min-h-[90vh]">
        <h4 className="text-2xl mb-8">Buttons</h4>
        <div className="flex flex-wrap gap-6">
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button/>`}</p>
              <Button>Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button variant="outline"/>`}</p>
              <Button variant="primary">Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button variant="text"/>`}</p>
              <Button variant="primary">Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button disabledShadow />`}</p>
              <Button variant="primary">Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button disabledShadow />`}</p>
              <Button variant="primary">Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
