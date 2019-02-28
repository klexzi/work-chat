import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import "../../utils/enzyme-config";

describe("<Input />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input type="password" uiFor="login" label="password" />);
  });
  it("should render component with its accurate properties", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });
});
