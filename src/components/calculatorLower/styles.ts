import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    height: 65%;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
`;
export const ContainerRow = styled.View`
    display: flex;
    flex-direction: row;
    height: 15%;
    width: 100%;
    margin-top: 6px;
    margin-bottom: 6px;
`;
export const ButtonPointer = styled.TouchableOpacity`
    display: flex;
    margin: auto;
    height: 100%;
    width: 22%;
    background-color: #A5A5A5;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;
export const ButtonSign = styled.TouchableOpacity`
    display: flex;
    margin: auto;
    height: 100%;
    width: 22%;
    background-color: #FF9200;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;
export const ButtonNumber = styled.TouchableOpacity`
    display: flex;
    margin: auto;
    height: 100%;
    width: 22%;
    background-color: #343434;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;
export const ButtonZero = styled.TouchableOpacity`
    display: flex;
    margin: auto;
    height: 100%;
    width: 48%;
    background-color: #343434;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;
export const PointerText = styled.Text`
    color: black;
    font-size: 30px;
`;
export const SignText = styled.Text`
    color: white;
    font-size: 30px;
`;

export const ContainerUp = styled.View`
    display: flex;
    height: 35%;
    width: 90%;
    margin: 0 auto;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: black;
`;
export const ContainerText = styled.View`
    display: flex;
    height: 40%;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;

`;
export const Text = styled.Text`
    font-size: 90px;
    color: #fff;
    padding-bottom: 50px;
`;
