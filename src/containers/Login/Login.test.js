import React from "react";
import { shallow } from "enzyme";

import Panel from "../../layout/Panel/Panel";
import Login from "./Login";
import "../../utils/enzyme-config";
import LoginForm from "../../components/LoginForm/LoginForm";

describe("<Login />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
  it("should render the login container", () => {
    expect(wrapper.find(".page")).toHaveLength(1);
  });
  it("should render with all its component", () => {
    expect(wrapper.find(Panel)).toHaveLength(1);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
});
