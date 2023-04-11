import React from 'react'
import ItemBook from '../../../components/ItemBook'
import { connectToDatabase } from '../../../utils/db'
import Book from '../../../models/Book'

export const AllBooksPage = ({ books }) => {
  return (
    <div className='flex flex-row'>
      {books.map(({ author, _id, bookTitle, description, createdAt }) => (
        <ItemBook
          key={_id}
          id={_id}
          bookTitle={bookTitle}
          description={description}
          author={author}
          createdAt={createdAt} />
      ))}
    </div>
  )
}

export default AllBooksPage

export async function getServerSideProps(context) {
  await connectToDatabase()
  const books = await Book.find().lean()

  const serializedBooks = JSON.parse(JSON.stringify(books, (key, value) =>
    key === '_id' ? value.toString() : value))

  return {
    props: {
      books: serializedBooks,
    },
  }
}
