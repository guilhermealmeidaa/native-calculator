import React, { useState } from "react";
import { Container } from "./styles";
import ContainerLower from "../components/calculatorLower/calculatorLower";

export default function Calculator() {

    return(
        <Container>
            <ContainerLower/>
        </Container>
    )
}