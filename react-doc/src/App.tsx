import Engine from "publicodes";
import "./App.css";
import { RulePage } from "publicodes-react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { ComponentProps, useRef } from "react";

import model from "./modele-numerique.model.json";

const engine = new Engine(model as object);

const baseUrl =
  process.env.NODE_ENV === "development" ? "" : "/modele-numerique";

function Documentation() {
  const url = useParams()["*"];
  const { current: renderers } = useRef({
    Link,
  } as ComponentProps<typeof RulePage>["renderers"]);

  return (
    <div>
      <RulePage
        documentationPath={`${baseUrl}/doc`}
        rulePath={url ?? "numérique"}
        engine={engine}
        renderers={renderers}
        language={"fr"}
        npmPackage="@incubateur-ademe/modele-numerique/rules.json"
      />
    </div>
  );
}

function Landing() {
  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        <li>
          <Link to={`${baseUrl}/doc/numérique`}>Modèle numérique</Link>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  console.log("baseURl:", baseUrl);
  console.log("rules:", Object.keys(model));
  return (
    <div className="App">
      <Routes>
        <Route path={`${baseUrl}/`} element={<Landing />} />
        <Route path={`${baseUrl}/doc/*`} element={<Documentation />} />
      </Routes>
    </div>
  );
}