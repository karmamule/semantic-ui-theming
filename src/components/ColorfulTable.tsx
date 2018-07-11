import * as React from "react";
import * as SUI from "semantic-ui-react";

export interface IColorfulTableProps {
    color: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black";
}

export class ColorfulTable extends React.Component<IColorfulTableProps, {}> {
    public render() {

        interface IGame {
            title: string;
            genre: string;
            price: number;
        }

        const tableData: IGame[] = [];
        tableData.push({title: "Fallout 4", genre: "RPG", price: 30});
        tableData.push({title: "Skyrim", genre: "RPG", price: 20});
        tableData.push({title: "Destiny 2", genre: "Shooter", price: 60});
        tableData.push({title: "The Witness", genre: "Puzzle", price: 10});
        tableData.push({title: "The Solus Project", genre: "Puzzle", price: 20});

        const tableRows: any[] = [];
        let k: number = 1;
        for (const game of tableData) {
            const tableCells: any[] = [];
            tableCells.push(<SUI.TableCell key={k++}>{game.title}</SUI.TableCell>); 
            tableCells.push(<SUI.TableCell key={k++}>{game.genre}</SUI.TableCell>);
            tableCells.push(<SUI.TableCell key={k++}>{game.price}</SUI.TableCell>);
            tableRows.push(<SUI.TableRow key={k++}>{tableCells}</SUI.TableRow>);
        }

        return (
            <div>
                <SUI.Table striped color={this.props.color} celled inverted>
                    <SUI.Table.Header>
                        <SUI.Table.Row>
                            <SUI.Table.HeaderCell key={1}>Game</SUI.Table.HeaderCell>
                            <SUI.Table.HeaderCell key={2}>Genre</SUI.Table.HeaderCell>
                            <SUI.Table.HeaderCell key={3}>Price</SUI.Table.HeaderCell>
                        </SUI.Table.Row>
                    </SUI.Table.Header>
                    <SUI.TableBody>{tableRows}</SUI.TableBody>
                </SUI.Table>
            </div>);
    }
}
