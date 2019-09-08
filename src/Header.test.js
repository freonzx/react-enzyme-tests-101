import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("It renders main div", () => {
    const wrapper = shallow(<Header />);
    //console.log(wrapper.debug());
    expect(wrapper.find(Header)).toBeTruthy();
  });

  it("It shows the text", () => {
    const wrapper = shallow(<Header name={"CodeSandbox"} />);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Hello CodeSandbox");
  });

  it("It works without props", () => {
    const wrapper = shallow(<Header />);
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Hello ");
  });
});
