import React from "react";
import { shallow, mount, render } from "enzyme";

import Button from "./Button";
import "../../utils/enzyme-config";

describe("<Button />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button classes="btn">test</Button>);
  });

  it("should render the props classes", () => {
    console.log(wrapper.debug());
    expect(wrapper.find(".btn")).toHaveLength(1);
  });
});
