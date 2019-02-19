import React from "react";
import { shallow, mount, render } from "enzyme";

import Frag from "./Frag";
import "../../utils/enzyme-config";

describe("<Frag />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Frag>
        <div>hello</div>
      </Frag>
    );
  });
  it("should render its children", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
