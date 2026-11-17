import React, { useState } from 'react';
import JustEmptyPage from './listRendering/just-empty-page.jsx';
import MappingAnArrayToElements from './listRendering/mapping-an-array-to-elements.jsx';
import CreatingAInstance from './theInstance/creating-a-instance.jsx';
import DataAndMethods from './theInstance/data-and-methods.jsx';
import LifecycleHooks from './theInstance/instance-lifecycle-hooks.jsx';
import './tabs.css';

const groups = {
  listRendering: ['justEmptyPage', 'mapingArrayToElements'],
  theInstance: ['creatingAInstance', 'dataAndMethods'],
};

const itemGroup = {
  justEmptyPage: 'listRendering',
  mapingArrayToElements: 'listRendering',
  creatingAInstance: 'theInstance',
  dataAndMethods: 'theInstance',
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('');

  const isOpen = (group) =>
    activeTab === group || groups[group].includes(activeTab);

  const toggleGroup = (group) => (event) => {
    event.preventDefault();
    setActiveTab((current) =>
      current === group || groups[group].includes(current) ? '' : group
    );
  };

  const toggleItem = (tab) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveTab((current) => (current === tab ? itemGroup[tab] || '' : tab));
  };

  return (
    <div className="tabsContainer">
      <ul className="tabs">
        <li className={isOpen('listRendering') ? 'active' : ''}>
          <a href="#listRendering" className="tabLink" onClick={toggleGroup('listRendering')}>
            List Rendering
          </a>
          <ul className="subList">
            <li className={activeTab === 'justEmptyPage' ? 'active' : ''}>
              <a href="#justEmptyPage" onClick={toggleItem('justEmptyPage')}>
                Just Empty Page
              </a>
            </li>
            <li className={activeTab === 'mapingArrayToElements' ? 'active' : ''}>
              <a href="#mapingArrayToElements" onClick={toggleItem('mapingArrayToElements')}>
                Mapping an Array to Elements
              </a>
            </li>
          </ul>
        </li>

        <li className={isOpen('theInstance') ? 'active' : ''}>
          <a href="#theInstance" className="tabLink" onClick={toggleGroup('theInstance')}>
            The Instance
          </a>
          <ul className="subList">
            <li className={activeTab === 'creatingAInstance' ? 'active' : ''}>
              <a href="#creatingAInstance" onClick={toggleItem('creatingAInstance')}>
                Creating a Instance
              </a>
            </li>
            <li className={activeTab === 'dataAndMethods' ? 'active' : ''}>
              <a href="#dataAndMethods" onClick={toggleItem('dataAndMethods')}>
                Data and Methods
              </a>
            </li>
          </ul>
        </li>

        <li className={activeTab === 'lifecycleHooks' ? 'active' : ''}>
          <a href="#lifecycleHooks" className="tabLink" onClick={toggleItem('lifecycleHooks')}>
            Lifecycle Hooks
          </a>
        </li>
      </ul>
      {activeTab === 'justEmptyPage' && <JustEmptyPage />}
      {activeTab === 'mapingArrayToElements' && <MappingAnArrayToElements />}
      {activeTab === 'creatingAInstance' && <CreatingAInstance />}
      {activeTab === 'dataAndMethods' && <DataAndMethods />}
      {activeTab === 'lifecycleHooks' && <LifecycleHooks />}
    </div>
  );
};

export default Tabs;
