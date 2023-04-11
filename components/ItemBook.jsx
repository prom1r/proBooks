import React from 'react'
import { Card, Col, Text, Button } from '@nextui-org/react'
import Link from 'next/link'
import ModalItemBook from './ModalItemBook'


export const ItemBook = ({ author, bookTitle, description, createdAt, id }) => {
  const [visible, setVisible] = React.useState(false)
  
  const handler = () => setVisible(true)
  const closeHandler = () => setVisible(false)

  return (
    <>
      <Link className='' href="/allBooks/[id]" as={`/allBooks/${id}`}>
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
      <Button auto flat color="error" onPress={handler}>
        Open modal
      </Button>
      <ModalItemBook
        author={author}
        bookTitle={bookTitle}
        description={description}
        visible={visible}
        closeHandler={closeHandler} />
    </>
  )
}
export default ItemBook
