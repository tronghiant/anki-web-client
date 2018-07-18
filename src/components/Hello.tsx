import * as React from 'react';
import './Hello.css';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}


const Welcome = (props: any) => {
    return <h1>Hello, {props.name}</h1>;
}

const Hello = ({
    name,
    enthusiasmLevel = 1,
    onIncrement,
    onDecrement
}: IProps) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return <div className="hello">
        <div className="greeting">
            <Welcome name={name + Array(enthusiasmLevel + 1).join('!')} />
        </div>
        <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    </div>;
};

export default Hello;
