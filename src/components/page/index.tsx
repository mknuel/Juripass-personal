import React, { ReactElement, useEffect } from 'react'

interface PageProps {
   title: string;
   children: ReactElement;
}

function Page(props: PageProps) {
   const { title, children } = props

   useEffect(() => {
      document.title = title || "Juripass"
   }, [title])

   return (
      <main>
         {children}
      </main>
   )
}

export default Page