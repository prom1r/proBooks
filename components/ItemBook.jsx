import React from 'react'
import { Card, Col, Text } from '@nextui-org/react'
import Link from 'next/link'

export const ItemBook = ({ author, bookTitle, description, createdAt, id }) => {

  return (
    <Link className='p-10' href="/allBooks/[id]" as={`/allBooks/${id}`}>
      <Card css={{ bg: "$black", w: "200px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
              {bookTitle}
            </Text>
            <Text h4 color="white">
              {description}
            </Text>
            <Text h4 color="white">
              {author}
            </Text>
            <Text h4 color="white">
              {createdAt}
            </Text>
          </Col>
        </Card.Header>


        <Card.Image
          src="https://nextui.org/images/card-example-2.jpeg"
          width="100%"
          height={340}
          objectFit="cover"
          alt="Card image background"
        />
      </Card>
    </Link>
  )
}
export default ItemBook
