import * as React from "react";

export interface IHelloProps {
    compiler: string;
    framework: string;
}


export class HelloB extends React.Component<IHelloProps, {}> {
    public render() {
        return <p>Hello <b>B</b> from {this.props.compiler} and {this.props.framework}</p>;
    }
}
