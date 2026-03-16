import { useEffect, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

const calculate = (a: string, op: Operator, b: string): string => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) return "0";
    switch (op) {
        case Operator.add:
            return (numA + numB).toString();
        case Operator.subtract:
            return (numA - numB).toString();
        case Operator.multiply:
            return (numA * numB).toString();
        case Operator.divide:
            return numB !== 0 ? (numA / numB).toString() : "Error";
        default:
            return "0";
    }
};

export const useCalculator = () => {
    const [formula, setFormula] = useState("0")

    const [number, setNumber] = useState("0")
    const [prevNumber, setPrevNumber] = useState("0")

    const [lastOperation, setLastOperation] = useState<Operator | undefined>(undefined);

    useEffect(() => {
        if (lastOperation) {
            const displayNumber = number === "0" ? "" : number;
            setFormula(`${prevNumber} ${lastOperation} ${displayNumber}`.trim());
        } else {
            setFormula(number);
        }
    }, [number, prevNumber, lastOperation]);

    


    const clean = () => {
        setNumber("0")
        setPrevNumber("0")
        setFormula("0")
        setLastOperation(undefined)
    }

    const toggleSign = () => {
        if (number.includes("-")) {
            setNumber(number.replace("-", ""))
        } else {
            setNumber("-" + number)
        }
    }

    const deleteLastEntry = () => {
        if (number.length === 1 ||
            (number.length === 2 && number.includes("-"))) {
            setNumber("0")
        } else {
            setNumber(number.slice(0, -1))
        }
    }

    const buildNumber = (numberString: string) => {
        // No aceptar doble punto        
        if (number.includes(".") && numberString === ".") return;
        if (number === "0" && numberString !== ".") {
            // Reemplazar el 0 por el número ingresado
            setNumber(numberString);
        } else if (number === "-0" && numberString !== ".") {
            // Reemplazar el -0 por el número ingresado, manteniendo el signo negativo
            setNumber("-" + numberString);
        } else {
            // Concatenar el número ingresado al final del número actual
            setNumber(number + numberString);
        }
    }

    const divideOperation = () => {
        if (lastOperation) {
            const result = calculate(prevNumber, lastOperation, number);
            setPrevNumber(result);
            setFormula(result);
        } else {
            setPrevNumber(number);
        }
        setLastOperation(Operator.divide);
        setNumber("0");
    }

    const multiplyOperation = () => {
        if (lastOperation) {
            const result = calculate(prevNumber, lastOperation, number);
            setPrevNumber(result);
            setFormula(result);
        } else {
            setPrevNumber(number);
        }
        setLastOperation(Operator.multiply);
        setNumber("0");
    }

    const addOperation = () => {
        if (lastOperation) {
            const result = calculate(prevNumber, lastOperation, number);
            setPrevNumber(result);
            setFormula(result);
        } else {
            setPrevNumber(number);
        }
        setLastOperation(Operator.add);
        setNumber("0");
    }

    const substractOperation = () => {
        if (lastOperation) {
            const result = calculate(prevNumber, lastOperation, number);
            setPrevNumber(result);
            setFormula(result);
        } else {
            setPrevNumber(number);
        }
        setLastOperation(Operator.subtract);
        setNumber("0");
    }

    const calculateResult = () => {
        if (lastOperation) {
            const result = calculate(prevNumber, lastOperation, number);
            setFormula(result);
            setNumber(result);
            setPrevNumber("0");
            setLastOperation(undefined);
        }
    }

    return {
        // Properties
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLastEntry,
        divideOperation,
        multiplyOperation,
        addOperation,
        substractOperation,
        calculateResult,
    }

}