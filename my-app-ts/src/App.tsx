import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Card
          id={1}
          paragraph="Typescript"
          details="TS para frontend e backend"
        />
        <Card
          id={2}
          paragraph="HTML"
          details="HTML para frontend"
        />
        <Card
          id={3}
          paragraph="SQL"
          details="SQL para banco de dados"
        />
      </Layout>
    </>
  );
}

export default App;
