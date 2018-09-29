/* globals test, expect */

import React from 'react'
import { configure, shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './index'

configure({ adapter: new EnzymeAdapter() })

test('Renders the App Component', () => {
  const app = shallow(<App message='Testing is cool' />)

  expect(app.find('h1').length).toBe(1)
  expect(app.find('h1').text()).toBe('Hey its works! ✨')
  expect(app.find('h2').exists()).toBe(true)
  expect(app.find('h2').text()).toBe('Testing is cool')
})
