import { useState } from "react";
import Container from "@/components/Container";
import Head from "next/head";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Input from "@/components/Input";
import Row from "@/components/Row";
import Button from "@/components/Button";


export default function Home() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  
  const handleAddNumber = (num) => {
    setCurrentNumber((prev) =>
      prev === "0" ? num : prev + num
    );
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
  };

  const handleSumNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("+");
  };

  const handleMinusNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("-");
  };

  const handleEquals = () => {
    if (!firstNumber || !operation) return;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    let result = 0;
    if (operation === "+") result = num1 + num2;
    if (operation === "-") result = num1 - num2;

    setCurrentNumber(result.toString());
    setOperation(null);
    setFirstNumber(null);
  };

  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <Content>
        <Header></Header>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="CE" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>

    </>
  );
}
