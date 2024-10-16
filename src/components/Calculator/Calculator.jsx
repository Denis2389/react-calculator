import { useState } from "react";

const Calculator = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const handleAdd = () => {
        setResult(parseFloat(num1) + parseFloat(num2))
        setNum1('')
        setNum2('')
    };

    const handleMinus = () => {
        setResult(parseFloat(num1) - parseFloat(num2))
        setNum1('')
        setNum2('')
    }

    return (
        <div>
            <input type="number" placeholder="number1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input type="number" placeholder="number2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMinus}>-</button>
            <p>Результат: {result !== '' ? result : ''}</p>
        </div>

    );
}

export default Calculator