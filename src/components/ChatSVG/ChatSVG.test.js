import React from "react";
import { shallow } from "enzyme";

import ChatSVG from "./ChatSVG";
import "../../utils/enzyme-config";

describe("<ChatSVG />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ChatSVG />);
  });
  it("should render component", () => {
    expect(wrapper.find(".img-fluid")).toHaveLength(1);
  });
});
