import React, {useState, useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import axios from 'axios'
import mermaid from 'mermaid'

function App(){
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [svg, setSvg] = useState('')

  useEffect(()=>{
    mermaid.initialize({ startOnLoad: false })
  },[])

  useEffect(()=>{
    if (result && result.mermaid) {
      try {
        mermaid.mermaidAPI.render('diagram', result.mermaid, (svgCode) => {
          setSvg(svgCode)
        })
      } catch (e) {
        setSvg(`<pre>${e.message}</pre>`)
      }
    }
  },[result])

  const submit = async () => {
    const res = await axios.post('http://localhost:4000/generate', { businessRequirements: { title: 'App', description: text }})
    setResult(res.data)
  }

  return (
    <div style={{padding:20}}>
      <h1>AI Architecture Generator</h1>
      <textarea value={text} onChange={e=>setText(e.target.value)} rows={6} cols={60} placeholder="Paste business requirements here" />
      <br />
      <button onClick={submit}>Generate</button>

      {result && (
        <div style={{marginTop:20}}>
          <h2>Mermaid</h2>
          <div dangerouslySetInnerHTML={{__html: svg}} />

          <h2>Tech Recommendations</h2>
          <pre>{JSON.stringify(result.techRecommendations, null, 2)}</pre>

          <h2>Cloud Plans</h2>
          <pre>{JSON.stringify(result.cloudPlans, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
