import * as React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

const initialState = { activeItem: "boston" };
type MenuState = Readonly<typeof initialState>;
interface IMenuProps {
    onChange: (selectedItem: string) => void;
}

export default class MenuExampleHeaderVertical extends React.Component<IMenuProps, MenuState> {
  private defaultSelect: string = "boston";
  private handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
      let name: string = data.name ? data.name : this.defaultSelect;
      this.setState({ activeItem: name});
      this.props.onChange(name);
  }

  public render() {
    const { activeItem } = this.state || this.defaultSelect;

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Cities</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="Boston"
              active={activeItem === "boston"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Waltham"
              active={activeItem === "waltham"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Settings</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="Light/Dark Theme"
              active={activeItem === "lightDarkTheme"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
