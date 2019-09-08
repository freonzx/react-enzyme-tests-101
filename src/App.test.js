import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  it("It has Header children", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("It can click the button, Header hides and shows again", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);
    button.simulate("click");
    expect(wrapper.find(Header)).toHaveLength(0);
    button.simulate("click");
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
