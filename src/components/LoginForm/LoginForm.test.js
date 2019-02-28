import React from "react";
import { shallow } from "enzyme";

import LoginForm from "./LoginForm";
import "../../utils/enzyme-config";

describe("<LoginForm />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginForm />);
  });
  it("should render login form", () => {
    expect(wrapper.contains("form")).toEqual(true);
  });
});
