import * as React from "react";

export interface IHelloProps {
    compiler: string;
    framework: string;
}


export class HelloB extends React.Component<IHelloProps, {}> {

    // Move the field myFaveGame so it comes after the method latestGameMessage
    // to see the member-ordering check kick in
    public myFaveGame: string = "Fallout 76";

    public latestGameMessage = (gameTitle: string) => {
        return `I cannot WAIT to play ${gameTitle}!`;
    }
  
    public render() {
        return(
                <div>
                    <p>Hello <b>B</b> from {this.props.compiler} and {this.props.framework}</p>
                    <p>{this.latestGameMessage(this.myFaveGame)}</p>
                </div>
              );
    }
}
