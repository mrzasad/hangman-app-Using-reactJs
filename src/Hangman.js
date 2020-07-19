import React from 'react';
import { Button } from 'react-bootstrap';
import img0 from './images/1.png';
import img1 from './images/2.png';
import img2 from './images/3.png';
import img3 from './images/4.png';
import img4 from './images/5.png';
import img5 from './images/6.png';
import img6 from './images/7.png';
import {Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Hangman extends React.Component {
    constructor(props) {
        super(props);
        this.MaxErrorCount = 6;
        this.words = [];
        this.words.push('MISSISSIPPI');
        this.words.push('WORD');
        this.words.push('AMERICA');
        this.words.push('BOOK');
        this.words.push('LIBERTY');
        this.words.push('UNION');
        this.words.push('AUSTRALIA');
        this.words.push('DIRECTORY');
        this.words.push('INDOOR');
        this.words.push('DEMOCRACY');
        
        var rand = Math.floor(Math.random() * this.words.length);

        this.index = rand;
        this.state = {
            errorCount: 0,
            index: rand,
            word: this.words[this.index],
            correctCount: 0
        };
        //this.setState({index:1});
        //console.log(this.state.word);
    }
    tryAgain = () => {
        window.location.reload(false);
    }
    GuessLetter = (button) => {
        var indices = [];
        this.state.word.split('').map((a, i) => {
            if (a == button.id)
                indices.push(i);
        });

        if (indices.length > 0) {
            this.setState({ correctCount: this.state.correctCount + indices.length })
            button.className = 'CorrectAlphabet btn';

        }

        else {
            button.className = 'IncorrectAlphabet btn';
            this.setState({ errorCount: this.state.errorCount + 1 })
        }

        button.disabled = true;
        indices.map((a, i) => {
            var box = document.getElementById('_' + a);
            box.innerHTML = button.id;
            // debugger;
        });

    }
    render() {
        var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const alphaButtons = alphabets.split('').map((d, i) => <Button id={d} className="Alphabet" key={i} onClick={e => this.GuessLetter(e.target)}>{d}</Button>);

        const emptyBoxes = this.state.word.split('').map((d, i) => <Button id={'_' + i} className="Empty" key={i} disabled>___</Button>);

        var img = img0;
        if (this.state.errorCount == 1) img = img1;
        if (this.state.errorCount == 2) img = img2;
        if (this.state.errorCount == 3) img = img3;
        if (this.state.errorCount == 4) img = img4;
        if (this.state.errorCount == 5) img = img5;
        if (this.state.errorCount == 6) img = img6;

        if (this.state.correctCount == this.state.word.length)
            return (<div>
                <img id='imgHangman' src={img}></img><br />
                <h1>Congratulations! You Won.</h1>
                <Button id='play' className="MenuButton" onClick={e => this.tryAgain()}>Play Again</Button>
            </div>);
        else if (this.state.errorCount < this.MaxErrorCount)
            return (<div>
                <img id='imgHangman' src={img}></img><br />
                {emptyBoxes}<br />
                {alphaButtons}
            </div>);
        else if (this.state.errorCount >= this.MaxErrorCount)
            return (<div>
                <img id='imgHangman' src={img6}></img><br />
            <h1>Sorry! You Failed. Correct Answer is {this.state.word}</h1>
                <Button id='try' className="MenuButton" onClick={e => this.tryAgain()}>Try Again</Button>
            </div>);

    }
}

export default Hangman;