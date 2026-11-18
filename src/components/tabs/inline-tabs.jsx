import React, { useState } from 'react';
import './inline-tabs.css';

const tabsData = () => [
  {
    id: 1,
    title: "Main Tab 1",
    heading: "Main Tab one content",
    class: "one-tab",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    subTabs: [
      {
        id: 1,
        title: "Sub Tab 1",
        heading: "What is Lorem Ipsum?",
        class: "one-sub-tab",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        title: "Sub Tab 2",
        class: "two-sub-tab",
        heading: "Where does it come from?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        id: 3,
        title: "Sub Tab 3",
        class: "three-sub-tab",
        heading: "Where can I get some?",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    ]
  },
  {
    id: 2,
    title: "Main Tab 2",
    heading: "Main Tab two content",
    class: "two-tab",
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    subTabs: [
      {
        id: 1,
        title: "Vijayta",
        heading: "Panchal",
        class: "one-sub-tab",
        content: "I am a software engineer and I love to code.",
      },
      {
        id: 2,
        title: "Anvay",
        heading: "Varna",
        class: "two-sub-tab",
        content: "I am a Student and I love to learn.",
      },
      {
        id: 3,
        title: "Sumanya",
        heading: "Panchal",
        content: "I am a Student and I love to learn. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      }
    ]
  },
  {
    id: 3,
    title: "Main Tab 3",
    heading: "Main Tab three content",
    class: "three-tab",
    content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  },
  {
    id: 4,
    title: "Main Tab 4",
    class: "four-tab",
    heading: "1914 translation by H. Rackham",
    content: "all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    setActiveSubTab(tab.subTabs?.[0]?.id);
  }

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab.id);
  }

  // Find active tab
  const selectedTab = tabsData().find(
    (tab) => tab.id === activeTab
  );

  // Find active sub-tab
  const selectedSubTab = selectedTab?.subTabs?.find(
    (subTab) => subTab.id === activeSubTab
  );

  return (
    <div>
      <ul className="tabsContainer">
        {tabsData().map((tabItem) => (
          <li key={tabItem.id}>
            <button
              key={tabItem.id}
              className={`tab tab-item ${activeTab === tabItem.id ? "active" : ""}`}
              onClick={() => handleTabClick(tabItem)}
            >
              {tabItem.title}
            </button>

            {activeTab === tabItem.id && tabItem.subTabs && (
              <ul className="dropdown active">
                {tabItem.subTabs.map((subTab) => (
                  <li key={subTab.id}>
                    <button
                      className={`sub-tab tab-item ${
                        activeSubTab === subTab.id ? "active" : ""
                      }`}
                      onClick={() => handleSubTabClick(subTab)}
                    >
                      {subTab.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}  
            </li>
          ))}
      </ul>

      {/* Content */}
      <div className={`tab-content ${selectedTab?.class}`}>
        <h2>{selectedTab?.title}</h2>
        <h3>{selectedTab?.heading}</h3>
        <p>{selectedTab?.content}</p>

        {selectedSubTab && (
          <>
            <h3>{selectedSubTab.title}</h3>
            <h3>{selectedSubTab.heading}</h3>
            <p>{selectedSubTab.content}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Tabs;