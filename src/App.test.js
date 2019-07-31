import React from 'react';
import { mount, shallow } from 'enzyme';
import Browser from 'components/Browser';
import AddButtons from 'components/AddButtons';
import TopBar from 'components/TopBar';
import { addFolder } from 'reducer_hook_helpers/actions';
import App from './App';

describe('App test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders all child component', () => {
    const deepWrapper = mount(<App />);
    deepWrapper.contains(Browser);
    deepWrapper.contains(AddButtons);
    deepWrapper.contains(TopBar);
  });

  it('passes root as path initially', () => {
    const initialPath = { name: 'root', path: 'root' };
    expect(wrapper.find(TopBar).prop('currentPath')).toEqual(initialPath);
  });

  it('can call back button', () => {
    const testObject = { name: 'root/new', path: 'root/new' };
    wrapper.find(TopBar).props().setCurrentPath(testObject);
    expect(wrapper.find(TopBar).prop('currentPath')).toEqual(testObject);
  });

  it('initially browser is empty', () => {
    expect(wrapper.find(Browser).prop('openedDirectory')).toEqual([]);
  });

  describe('After adding folder', () => {
    const folder = addFolder({
      name: 'test-folder',
      key: 'test-key',
      path: 'root',
    });
    beforeEach((done) => {
      wrapper.find(AddButtons).props().dispatch(folder);
      wrapper.update();
      done();
    });

    it('Add button works and passes correct directory to browser', () => {
      expect(wrapper.find(Browser).prop('openedDirectory')).toEqual([{
        ...folder.payload,
        type: 'folder',
      }]);
    });
  });
});
