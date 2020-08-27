import styled from 'styled-components/native';
import { colors } from './colors';

export const ContainerLogin = styled.View`
    justify-content: center;
    background-color: ${colors.colorBackground};
    flex: 1;
    align-items: stretch;
    padding: 10px;
`;

export const TextInputLogin = styled.TextInput`
    justify-content: center;
    align-items: stretch;
    border-color: ${colors.colorBorder};
    border-width: 2px;
    height: 40px;
    padding-horizontal: 15px;
    margin-vertical: 10px;
    border-radius: 3px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    justify-content: center;
    align-items: stretch;
    background: ${colors.colorBorder};
    height: 40px;
    margin-vertical: 10px;
    text-align: center;
    border-radius: 3px;
`;

export const ButtonLoginTransparent = styled(ButtonLogin)`
    background: transparent;
`;

export const TextButton = styled.Text`
    color: ${colors.colorWhite};
    font-weight: bold;
    font-size: 15px;
    text-align: center;
`;

export const TextLogin = styled(TextButton)`
    color: ${colors.colorBorder};
    margin-vertical: 10px;
    font-weight:  ${props => props.intercept ? 'bold' : 'normal'};
    font-size: 15px;
    text-align: center;
`;