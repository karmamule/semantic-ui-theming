import * as React from "react";
import { CSSProperties} from "react";


export interface IHelloProps {
    compiler: string;
    framework: string;
}

export interface IMessageProps {
    message: string;
}

const FancyParagraph: React.SFC<IMessageProps> = (props) => {
    const fancyStyle: CSSProperties = {
        fontFamily: "lucida calligraphy",
        paddingLeft: "20px",
    };
    const makeParagraph = (someText: string) => {
        return <p>{someText}</p>;
    };

    return (
        <div style={fancyStyle}>
        {makeParagraph(props.message)}
    </div>);
};

export class HelloA extends React.Component<IHelloProps, {}> {
    public render() {
        return (
            <div>
                <p>Hello <b>A</b> from {this.props.compiler} and {this.props.framework}</p>
                <FancyParagraph message="Hello from a fancy react component within Hello-A" />
                <br/><br/>
            </div>);
    }
}
