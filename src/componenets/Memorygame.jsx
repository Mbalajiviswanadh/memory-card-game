    import React,{useRef, useState} from "react";
    import '../styles/Memorygame.css';
    import catlogo from '../images/catlogo.png';
import { Link } from "react-router-dom";
    function shuffle(array){  
        let currentIndex = array.length , randomIndex;

        while (currentIndex > 0){
            randomIndex=Math.floor(Math.random()*currentIndex); //Math.random = enerates a random number from 0-1 where 1 is excluded {for swapping }
            currentIndex--;
            [array[currentIndex],array[randomIndex]] =[array[randomIndex],array[currentIndex]];
        }
        return array;
    }

    const items =[1,2,3,4,5];
    const allItems= shuffle([...items, ...items]);
    const defaultState ={index: null, item: null};

    function Memorygame(){

        const [moves, setMoves] =useState(0); //initial = 0
        const [firstCard,setFirstCard] =useState(defaultState);
        const [secondCard,setSecondCard] =useState(defaultState);
        const [remainingCards,setRemainingCards] =useState(items);
        const timer =useRef();

         /*--------------------- LOGIC---------------------  */
        
        const handleClick =(index,item)=>{
            clearTimeout(timer.current);
            //if same card is clicked again, make it to default state
            if (firstCard.index ===index){
                setFirstCard(defaultState);
                setMoves(moves +1);
                return;
            }
            
            // this satisfies 1st and 3rd click
            //the first card will be null when we click the first card again and second card will not be null when we are clicking 3rd
            if(firstCard.index === null || secondCard.index !== null){
                setFirstCard({index,item});
                setSecondCard(defaultState);
                setMoves(moves +1);
            }
            else{
                setSecondCard({index,item});
                setMoves(moves +1);
                
                if(firstCard.item ===item){
                    setRemainingCards(remainingCards.filter((card)=> card !== item));
                }
            }
            timer.current= setTimeout(()=>{
                setFirstCard(defaultState);
                setSecondCard(defaultState);
            },1000); 
        };
        const playAgain = () => {
            // Reset the game state
            setMoves(0);
            setFirstCard(defaultState);
            setSecondCard(defaultState);
            setRemainingCards(items);
          };


        return (
            <>
            <div className="body-memo">
               <h1> {remainingCards.length > 0 ? "Cards to Find" : "GAME OVER!  WELL DONE👏"}
               
               {remainingCards.length === 0 && (
                <div className="pixel2">
                <Link to='/' onClick={playAgain}>
                <span style={{ color: 'white' }}>PLAY AGAIN</span>
          </Link>
          </div>
        )}

               
               <div className="remaining-cards">
                    {remainingCards.map((card, index) => {
                        return (
                        <img
                            key={index}
                            alt="cat"
                            className="remaining-card-image"
                            src={`https://robohash.org/${card}?set=set4&&size=80x80`}
                        />
                        );
                    })}
                </div>
                </h1>

                <div className="cards">
                {allItems.map((item,index)=>{
                    return (
                        <div key={item} className={`card-box ${(firstCard.index ===index || secondCard.index === index || !remainingCards.includes(item)) && "flipped" } `} onClick={()=> handleClick(index,item)}>
                            <div className="backside"></div>
                        <img key={index} alt="cat" src={`https://robohash.org/${item}?set=set4&&size=80x80`}/>     
                        </div>
                    );
                })}
                </div>
                <h2>Moves Used : <span style={{color:'rgb(213, 131, 222)'}}>{moves}</span></h2>
                
                <div className="fotter">
                <div className="fotter-matter">
                <p style={{ textAlign: 'center', margin: '16px',letterSpacing: '2px' }}>Made with ❤️ by Balaji viswanadh</p>
                <a href="https://www.instagram.com/mb_viswanadh/" target="_blank" rel="noopener noreferrer">@mb_viswanad</a>
                </div>

                <div className="fotter-img">
                    <img src={catlogo} alt="cat-img"/>
                </div>
                </div>
                </div>
            </>
        )

    }

    export default Memorygame;
