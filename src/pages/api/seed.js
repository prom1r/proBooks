import Book from '../../../models/Book'
import data from '../../../utils/data'
import db from '../../../utils/db'

const handler = async(req, res) => {
    await db.connect()
    await Book.deleteMany()
    await Book.insertMany(data.books)
    await db.disconnect()
    res.status(200).json({msg: 'seeded successfully'})
}

export default handler