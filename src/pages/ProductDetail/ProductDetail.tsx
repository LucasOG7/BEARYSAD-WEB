import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>()
    return (
        <div>
            <h2>Producto ID: {id}</h2>
        </div>
    )
}

