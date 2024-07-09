import Engine from 'publicodes'
import './App.css'
import { RulePage } from '@publicodes/react-ui'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { ComponentProps, useRef } from 'react'
import ReactMardown from 'react-markdown'

import model from './publicodes-acv-numerique.model.json'

const engine = new Engine(model as {})

const baseUrl =
  process.env.NODE_ENV === 'development' ? '' : '/publicodes-acv-numerique'

const defaultRule = 'construction-data-center'

function Documentation() {
  const url = useParams()['*']
  const { current: renderers } = useRef({
    Link,
    Text: ({ children }) => <ReactMardown children={children} />
  } as ComponentProps<typeof RulePage>['renderers'])

  return (
    <div>
      <RulePage
        documentationPath={`${baseUrl}/doc`}
        rulePath={url ?? defaultRule}
        engine={engine}
        renderers={renderers}
        language={'fr'}
        npmPackage="@incubateur-ademe/publicodes-acv-numerique"
      />
    </div>
  )
}

function Landing() {
  return (
    <div>
      <h1>Documentation</h1>
      <ul>
        <li>
          <Link to={`${baseUrl}/doc/${defaultRule}`}>
            Accéder à la documentation
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default function App() {
  console.log('baseURl:', baseUrl)
  console.log('rules:', Object.keys(model))
  return (
    <div className="App">
      <Routes>
        <Route path={`${baseUrl}/`} element={<Landing />} />
        <Route path={`${baseUrl}/doc/*`} element={<Documentation />} />
      </Routes>
    </div>
  )
}
