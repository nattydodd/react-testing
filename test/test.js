var assert = require('assert');
import Counter from '../src/Counter';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

describe('App', function() {
  describe('Module Counter', function() {
    it('should have a contructor method', function() {
      assert.equal(typeof Counter.constructor, 'function');
    });
  })
  describe('Counter', function () {
    it('should have a button', function () {
      const wrapper = shallow(<Counter/>);
      expect(wrapper.find('button')).to.have.length(1);
    });

    it('should have an onClick function', function () {
      const wrapper = shallow(<Counter/>);
      expect(wrapper.props().onClick).to.be.defined;
    });
  });

});
