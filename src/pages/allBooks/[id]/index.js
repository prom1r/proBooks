import Book from '../../../../models/Book'
import { connectToDatabase } from '../../../../utils/db'

const BookCard = ({ serializedBook }) => {
    return (
        <div>
            <h1>{serializedBook.bookTitle}</h1>
            <h2>{serializedBook.description}</h2>
            <h3>{serializedBook.author}</h3>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    await connectToDatabase()

    const book = await Book.findById(params.id).lean()
    book._id = book._id.toString()


    const serializedBook = JSON.parse(JSON.stringify(book, (key, value) =>
        key === '_id' ? value.toString() : value))

    return { props: { serializedBook } }
}

export default BookCard
