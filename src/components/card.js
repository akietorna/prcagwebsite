import React from 'react'
<<<<<<< HEAD
import Typewritting from './typewritting'
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e

function Card(props) {
    return(
        <div style={styles.card} id={props.id}>
            <img style={styles.card_img} src={props.pics} alt='pics' />
        </div>
    )
}

const styles ={
    card: {
        margin:0,
        padding:0,
        width:'auto',
        height:'auto',
        position:'absolute',
        top:0,
        left:0,
        transform: 'translate(-0.1%, -0.1%)',
        overflow:"hidden",
<<<<<<< HEAD
        backgroundColor:'black',
    },
    card_img: {
        width:'100%',
        height:'100%',
        position:'relative',
        top:0,
        left:0,
        transform: 'translate(0.1%, 0.1%)',
=======
    },
    card_img: {
        maxWidth:'100%',
        maxHeight:'100%',
        position:'relative',
        top:0,
        left:0,
        transform: 'translate(-0.1%, -0.1%)',
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
        overflow:"hidden",
    }
}

export default React.memo(Card);