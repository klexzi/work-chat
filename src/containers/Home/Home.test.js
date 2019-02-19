import React from "react";
import { shallow, mount, render } from "enzyme";

import Home from "./Home";
import "../../utils/enzyme-config";

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it("should render the componen", () => {
    expect(wrapper.find(".page-home")).toHaveLength(1);
  });
  it("should render the buttons", () => {
    expect(wrapper.find("Button")).toBeDefined();
  });
});
