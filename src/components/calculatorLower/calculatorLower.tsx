import React, { useState } from "react";
import { 
    Container, 
    ButtonPointer, 
    ContainerRow, 
    ButtonSign, 
    ButtonNumber, 
    PointerText, 
    SignText, 
    ButtonZero, 
    ContainerUp, 
    ContainerText, 
    Text 
    } from "./styles";
import * as math from "mathjs";

export default function ContainerLower() {
    const [input, setInput] = useState("0"); 
    const operations = ['*', '+', '-', ',', '/'];

    const handleInput = (value: string) => {
        if (input.charAt(0) === '0') {
            setInput(value);
        } 
        else {
        setInput(input + value);
        }
    }
    const handleOperation = (value: string) => {
        if(input === '0' ||(operations.includes(input[input.length - 1]) && operations.includes(value))){
            return;
        }
        else{
            if(value === '*'){
                value = 'x';
            }
            if(value === '/'){
                value = '÷';
            }
            setInput(input + value);
        }
    }
    const handleCalculate = () => {
        if(input === '0' || operations.includes(input[input.length - 1])){
            return input;
        }
        else{
            if(input.includes('x')){
                var input_handle = input.replace('x', '*');
                setInput(math.evaluate(input_handle).toString());
                return;
            }
            if(input.includes('÷')){
                var input_handle = input.replace('÷', '/');
                setInput(math.evaluate(input_handle).toString());
                return;
            }
            setInput(math.evaluate(input).toString());
            
        }
    }

    function handleChange(){
        if(input === '0'){
            return;
        }
        if(input.includes('-')){
            setInput(input.replace('-', ''));
            return;
        }
        else{
            setInput('-' + input);
            return;
        }
    }
    
    const handleDecimal = () => {
        if(input === '0'){
            return;
        }
        if(input.includes('0.0')){
            return;
        }
        else{
            setInput('0.0' + input);
            return;
        }

    }

    return(
        <>
        <ContainerUp>
            <ContainerText>
                <Text>{input}</Text>
            </ContainerText>
        </ContainerUp>

        <Container>
            <ContainerRow>
                <ButtonPointer onPress={() => setInput("0")}><PointerText>AC</PointerText></ButtonPointer>
                <ButtonPointer onPress={() => handleChange()}><PointerText>+/-</PointerText></ButtonPointer>
                <ButtonPointer onPress={() => handleDecimal()}><PointerText>%</PointerText></ButtonPointer>
                <ButtonSign onPress={() => handleOperation('/')}><SignText>÷</SignText></ButtonSign>
            </ContainerRow>
            <ContainerRow>
                <ButtonNumber onPress={() => handleInput('7')}><SignText>7</SignText></ButtonNumber>
                <ButtonNumber onPress={() => handleInput('8')}><SignText>8</SignText></ButtonNumber>
                <ButtonNumber onPress={() => handleInput('9')}><SignText>9</SignText></ButtonNumber>
                <ButtonSign onPress={() => handleOperation('*')}><SignText>x</SignText></ButtonSign>
            </ContainerRow>
            <ContainerRow>
                <ButtonNumber onPress={() => handleInput('4')}><SignText>4</SignText></ButtonNumber>
                <ButtonNumber onPress={() => handleInput('5')}><SignText>5</SignText></ButtonNumber>
                <ButtonNumber onPress={() => handleInput('6')}><SignText>6</SignText></ButtonNumber>
                <ButtonSign onPress={() => handleOperation('-')}><SignText>-</SignText></ButtonSign>
            </ContainerRow>
            <ContainerRow>
                <ButtonNumber onPress={() => handleInput('1')}><SignText>1</SignText></ButtonNumber>
                <ButtonNumber onPress={() => handleInput('2')}><SignText>2</SignText></ButtonNumber>
                <ButtonNumber onPress={() => handleInput('3')}><SignText>3</SignText></ButtonNumber>
                <ButtonSign onPress={() => handleOperation('+')}><SignText>+</SignText></ButtonSign>
            </ContainerRow>
            <ContainerRow>
                <ButtonZero onPress={() => handleInput('0')}><SignText>0</SignText></ButtonZero>
                <ButtonNumber onPress={() => handleOperation(',')}><SignText>,</SignText></ButtonNumber>
                <ButtonSign onPress={() => handleCalculate()}><SignText>=</SignText></ButtonSign>
            </ContainerRow>
            
        </Container>
        </>
    )
}