import React from "react"
import { shallow, } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import NewTipoProduto from '../pages/tipoProduto/index'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe("Testing NewTipoProduto Component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(
            <NewTipoProduto />
        )

        expect(wrapper).toMatchSnapshot();
    })
    
})