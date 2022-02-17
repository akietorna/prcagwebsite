import React from 'react';
import styled from 'styled-components';
import Typewiter from 'typewriter-effect';


const Typping = styled.div`
    color: yellow;
    font-size: 60px;
    height:94vh;
    width:100vw;
    top:100px;
    font-family:cursive;
`

const welcomeMessage = ['Worship with us on Wednesdays,Fridays @ 6:30 pm and Sundays @ 7am','We are found Opposite The ECG Office, Aflao on the Diamond Cement Road', 'We are passionate about your spiritual growth and wellbeing','And Other Areas of your life', 'We are pleased to have you here'];

function Typewritting() {
    return(
        <Typping >
            <Typewiter loop
                onInit = {(typewritter) =>{
                            typewritter.typeString(welcomeMessage[0])
                            .pauseFor(5000)
                            .deleteAll()
                            .start()
                        }
                    }
            />
        </Typping>
    )
}

export default Typewritting;