import { useEffect } from 'react'

function PageTitle({ title }) {
    useEffect(() => {
        document.title = title ? `${title} | Sachin Saxena` : 'Sachin Saxena'
    }, [title])

    return null
}

export default PageTitle