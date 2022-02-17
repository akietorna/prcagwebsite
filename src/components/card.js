import React from 'react'

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
        backgroundColor:'black',
    },
    card_img: {
        width:'100%',
        height:'100%',
        position:'relative',
        top:0,
        left:0,
        transform: 'translate(0.1%, 0.1%)',
    }
}

export default React.memo(Card);