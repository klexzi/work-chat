import React from "react";
import { shallow, mount, render } from "enzyme";

import Navbar from "./Navbar";
import "../../utils/enzyme-config";
describe("<Navigation />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("should render navbar", () => {
    expect(wrapper.find("nav")).toHaveLength(1);
  });
});
