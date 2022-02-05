import React, { Component, Fragment } from 'react'
import Card from './card.js'
import "./arrows.css"
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Typist from 'react-typist'
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
import Typist from 'react-typist'
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
import * as MdIcons from 'react-icons/md'
import homepics1 from '../pictures/homepics1.jpg'
import homepics2 from '../pictures/homepics2.jpg'
import homepics3 from '../pictures/homepics3.jpg'
import homepics4 from '../pictures/homepics4.jpg'
import homepics5 from '../pictures/homepics5.jpg'
<<<<<<< HEAD
<<<<<<< HEAD
import Typewritting from './typewritting.js'
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e

class Deck extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards : [
                <Card pics={homepics1} id='one' key='one' />,
                <Card pics={homepics2} id='two' key='two' />,
                <Card pics={homepics3} id='three' key='three' />,
                <Card pics={homepics4} id='four' key='four' />,
                <Card pics={homepics5} id='five' key='five' />
            ]
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    

=======
 
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
 
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e

    componentDidMount() {
        this.number_of_cards_by_index = this.images.children.length - 1;
        this.middle_card_by_index = Math.floor(this.number_of_cards_by_index / 2);
        this.current_card = this.middle_card_by_index;

        /* **************RESPONSIVE CODES************ */
        let img_width_as_percentage = 100;
<<<<<<< HEAD
<<<<<<< HEAD
        // let img_height_as_percentage = 100;
        // img_width_as_percentage = window.innerWidth < 

        // this.new_height = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
        // (img_height_as_percentage / 100) * window.screen.height:
        // (img_height_as_percentage / 100) * window.innerHeight;

=======
        // img_width_as_percentage = window.innerWidth < 

>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
        // img_width_as_percentage = window.innerWidth < 

>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
        this.new_width = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
        (img_width_as_percentage / 100) * window.screen.width:
        (img_width_as_percentage / 100) * window.innerWidth;

        this.view_port.style.width = `${this.new_width}px`
<<<<<<< HEAD
<<<<<<< HEAD
        // this.view_port.style.height = `${this.new_height}px`
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
        this.selection_buttons_container.style.bottom =`${this.view_port.getBoundingClientRect().top}px`;
        // for(let i=0; i < this.images.children.length; i++){
        //     this.selection_buttons_container.children[i].transitionDuration ='0.0s'
        //     this.selection_buttons_container.children[i].style.width =`${this.new_width * 0.03}px`
        //     this.selection_buttons_container.children[i].style.height =`${this.new_width * 0.03}px`
        // }


        this.order_cards();
        this.update_selection();

        window.addEventListener('resize', () =>{
            img_width_as_percentage = 100;
            // img_width_as_percentage = window.innerWidth < 

            this.new_width = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
            (img_width_as_percentage / 100) * window.screen.width:
            (img_width_as_percentage / 100) * window.innerWidth;

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
            this.view_port.style.width = `${this.new_width}px`;
            this.selection_buttons_container.style.bottom =`${this.view_port.getBoundingClientRect().top}px`;
            // for(let i=0; i < this.images.children.length; i++){
            //     this.selection_buttons_container.children[i].transitionDuration ='0.0s'
            //     this.selection_buttons_container.children[i].style.width =`${this.new_width * 0.01}px`
            //     this.selection_buttons_container.children[i].style.height =`${this.new_width * 0.01}px`
            // }
            

            this.order_cards();
        });
        /* ****************************************** */
        this.last_positions = [];
        this.right_boundary = parseFloat(this.images.children[this.number_of_cards_by_index].style.left) + this.new_width;
        this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

<<<<<<< HEAD
<<<<<<< HEAD
        for (let i = 0; i <= this.number_of_cards_by_index; i++){
=======
        for (let i = 0; i < this.images.children.length; i++){
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
        for (let i = 0; i < this.images.children.length; i++){
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
            this.last_positions.push(parseFloat(this.images.children[i].style.left))
        }
        /* **************BUTTON NAVIGATION************ */
        this.scroll_in_progress = false;
        /* ****************************************** */

        /* **************AUTOPLAY CODE************ */
        this.autoplay_timeout_id = null;
        this.autoplay_interval_id = null;

        /* ****************************************** */

        this.selection_buttons_container.children[0].click();
    }

    update_selection = () =>{
        for (let i=0;i < this.images.children.length; i++){
            if (i === this.current_card){
<<<<<<< HEAD
<<<<<<< HEAD
                this.selection_buttons_container.children[i].style.backgroundColor = 'rgb(252, 5, 219)';
=======
                this.selection_buttons_container.children[i].style.backgroundColor = 'yellow';
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
                this.selection_buttons_container.children[i].style.backgroundColor = 'yellow';
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
            } else {
                this.selection_buttons_container.children[i].style.backgroundColor = 'white';
            }
        }     
    }

    order_cards = () => {
        //const card_width = parseFloat(getComputedStyle(this.images.children[0]).width);
            let counter_for_right = 1,
            counter_for_left = this.middle_card_by_index;
            for (let i = 0; i < this.images.children.length; i++) {
                this.images.children[i].style.transitionDuration = '1s';
                
                if(i < this.middle_card_by_index){
                    this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width)}px`;
                    counter_for_left--;
                } else if (i > this.middle_card_by_index){
                    this.images.children[i].style.left = `${(counter_for_left * this.new_width) + (this.new_width )}px`;
                    counter_for_right++;
                } else {
                    this.images.children[i].style.left = `${this.new_width}px`;
                }
            }
    }

    handle_boundaries = () =>{
        if (this.last_positions[0] <= this.left_boundary) {
            const end_of_deck = this.last_positions[this.number_of_cards_by_index] + this.new_width;

            this.images.children[0].style.left = `${end_of_deck}px`;
            this.last_positions[0] = end_of_deck;

            this.images.appendChild(this.images.children[0], this.images.children[this.number_of_cards_by_index]);
            this.last_positions.splice(this.number_of_cards_by_index, 0, this.last_positions.shift() )
        }

        if (this.last_positions[this.number_of_cards_by_index] >= this.right_boundary) {
            const beginning_of_deck = this.last_positions[0] - this.new_width;

            this.images.children[this.number_of_cards_by_index].style.left = `${beginning_of_deck}px`;
            this.last_positions[this.number_of_cards_by_index] = beginning_of_deck;

            this.images.insertBefore(this.images.children[this.number_of_cards_by_index], this.images.children[0]);
            this.last_positions.splice(0, 0, this.last_positions.pop() )
        }
    }

    


    /* *******************************BUTTON NAVIGATION*************************************** */
  
    handle_next = () => {
        if(this.scroll_in_progress) return;
        this.scroll_in_progress=true;

        for (let i = 0; i < this.images.children.length; i++){
            this.images.children[i].style.transitionDuration = '1s';
            const updated_position = this.last_positions[i] - this.new_width;

            this.images.children[i].style.left = `${updated_position}px`;
            this.last_positions[i] = updated_position;
        }

        this.current_card = (this.current_card===this.number_of_cards_by_index) ? 0 : ++this.current_card;

        this.handle_boundaries();
        this.update_selection();

        setTimeout(() => {
            this.scroll_in_progress = false;
            this.start_autoplay();
        }, 200);
    }

    handle_prev = () => {
        if(this.scroll_in_progress) return;
        this.scroll_in_progress=true;

        for (let i = 0; i < this.images.children.length; i++){
            this.images.children[i].style.transitionDuration = '1s';
            const updated_position = this.last_positions[i] + this.new_width;

            this.images.children[i].style.left = `${updated_position}px`;
            this.last_positions[i] = updated_position;
        }

        this.current_card = (this.current_card===0) ? this.number_of_cards_by_index : --this.current_card;

        this.handle_boundaries();
        this.update_selection();

        setTimeout(() => {
            this.scroll_in_progress = false;
            this.start_autoplay();
        }, 200);
    }
      /* ****************************************************************************************************** */


      /* **************SELECTION NAVIGATION************ */
        handle_selection = event => {
            if (event.target === this.selection_buttons_container) return ;

            let new_card = null;

            for (let i = 0; i < this.images.children.length; i++){
                if(event.target === this.selection_buttons_container.children[i]) new_card = i ;
            }

            for (let i = 0; i < this.images.children.length; i++){
                const updated_position = this.last_positions[i] + ((this.current_card - new_card) * this.new_width);

                this.images.children[i].style.transitionDuration = `0.0s`;
                this.images.children[i].style.left = `${updated_position}px`;
                this.last_positions[i] = updated_position;
            }
            
            for(let i=0; i< Math.abs(this.current_card - new_card); i++){
                this.handle_boundaries();
            }

            this.current_card = new_card;

            this.update_selection();
            this.start_autoplay();
        }
        /* ****************************************** */


        /* **************AUTOPLAY CODE************ */
            start_autoplay = () =>{
                clearTimeout(this.autoplay_timeout_id);
                clearInterval(this.autoplay_interval_id);

                this.autoplay_timeout_id = setTimeout(() =>{
                    this.autoplay_interval_id = setInterval(() => {
<<<<<<< HEAD
<<<<<<< HEAD
                        for (let i = 0; i <= this.number_of_cards_by_index; i++){
=======
                        for (let i = 0; i < this.images.children.length; i++){
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
                        for (let i = 0; i < this.images.children.length; i++){
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
                            this.images.children[i].style.transitionDuration = '1s';
                            const updated_position = this.last_positions[i] - this.new_width;

                            this.images.children[i].style.left = `${updated_position}px`;
                            this.last_positions[i] = updated_position;
                        }

                        this.current_card = (this.current_card===this.number_of_cards_by_index) ? 0 : ++this.current_card;

                        this.handle_boundaries();
                        this.update_selection();
                    }, 5000);
                }, 1000);
            }
        /* ****************************************** */

    render() {
        return (
<<<<<<< HEAD
<<<<<<< HEAD
            <>
=======
            <Fragment>
                
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
            <Fragment>
                
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
                <div ref={ref_id => this.view_port = ref_id} className='view-port'>
                    <div ref={ref_id => this.images = ref_id} className='image-container'>
                        {this.state.cards}
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                   
                    <div className="nav-buttons-container">
                        <MdIcons.MdOutlineArrowBackIos onClick={this.handle_prev}  ref ={ref_id => this.button_prev = ref_id} className='nav-button' />
                        
                        <MdIcons.MdOutlineArrowForwardIos onClick={this.handle_next}  ref ={ref_id => this.button_next = ref_id} className='nav-button' />
                    </div>                  
                </div>

=======
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
                    <div className="nav-buttons-container">
                        <MdIcons.MdOutlineArrowBackIos onClick={this.handle_prev}  ref ={ref_id => this.button_prev = ref_id} className='nav-button' />
                        <MdIcons.MdOutlineArrowForwardIos onClick={this.handle_next}  ref ={ref_id => this.button_next = ref_id} className='nav-button' />
                    </div>
                    <div className='Typing'>
        
                    </div>
                </div>
                
<<<<<<< HEAD
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e

                <div onClick={this.handle_selection} ref={ref_id => this.selection_buttons_container = ref_id } className='selection-buttons-container'>
                    {
                        this.state.cards.map((_,index) =>{
                            return(<div className='selection-buttons' key={index}></div>)
                        })
                    }
                    
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                
                
            </>
=======
            </Fragment>
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
            </Fragment>
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
        )
    }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
const Words = ['Looking for Bible Believing Church to attend ?','Worship with us every Wednesday,Friday @ 6:30 pm and Sunday @ 7am', 'We are passionate about your spiritual growth and wellbeing','And Other Areas of your life', 'We are pleased to have you here'];
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e
=======
const Words = ['Looking for Bible Believing Church to attend ?','Worship with us every Wednesday,Friday @ 6:30 pm and Sunday @ 7am', 'We are passionate about your spiritual growth and wellbeing','And Other Areas of your life', 'We are pleased to have you here'];
>>>>>>> 98e9b0387817d4e5257722bd5f62b9bd7442048e

export default Deck;
