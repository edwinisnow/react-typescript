import React, { FunctionComponent } from 'react';

type CardFunctionalProps = {
    title: string,
    paragraph?: string,
}
export const CardFunctional: FunctionComponent<CardFunctionalProps> = (props) => <aside>
    <h2>{props.title}</h2>
    <p>{props.paragraph} </p>
    {props.children}
</aside>
