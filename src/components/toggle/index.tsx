import React from 'react'
import './index.scss'

interface Props {
   checked: boolean
   change: () => void
}

function Toggle(props: Props) {
   const { checked, change } = props
   return (
      <div>
         <input type="checkbox" className="toggle" checked={checked} onChange={change} />
      </div>
   )
}

export default Toggle