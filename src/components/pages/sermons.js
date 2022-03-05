import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import commander from '../pictures/commander.jpg'

function Sermons() {
    return(
        <div>
            <div className='row'>
                <div className='sermon col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{width:'18 rem'}}>
                        <Card.Img variant='top' src={commander} />
                        <Card.Title> Jesus our Saviour</Card.Title>
                        <Card.Text>hsgdhddjdhjdhdhjddhjdhdhjdndjdnndkjjdjdnjdndjdnndjnjdnndjhjdhdjjdjdnccnjcjcnjnjn</Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Sermons;