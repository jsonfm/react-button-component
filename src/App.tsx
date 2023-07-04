import { Button } from "./components/Button"
import { Layout } from "./components/Layout"

function App() {
  const rowClassName = "flex items-center overflow-x-auto gap-4"
  const columnClassName = "flex flex-col items-center justify-center md:items-start gap-4 w-40 md:w-72";
  return (
    <Layout>
      <div className="min-h-[90vh] px-4 pt-8 pb-4 md:py-4">
        <h4 className="text-2xl mb-8 text-center md:text-start">Buttons</h4>
        <div className="flex flex-wrap gap-8">
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button/>`}</p>
              <Button>Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <button className="btn btn-hover">Default</button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button variant="outline"/>`}</p>
              <Button outline>Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <button className="btn btn-outline btn-outline-hover">Default</button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button variant="text"/>`}</p>
              <Button variant="text">Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button disabledShadow />`}</p>
              <Button variant="primary" disabledShadow>Default</Button>
            </div>
            <div className={columnClassName}>
              <p>{`&:hover, &:focus`}</p>
              <Button>Default</Button>
            </div>
          </div>
          <div className={rowClassName}>
            <div className={columnClassName}>
              <p>{`<Button variant="primary"/>`}</p>
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
