import React, { useState, useEffect, useRef } from 'react';
import Header from "../header/header";
import Branding from "./mainComponent/branding";
import { Weekhelp } from "./mainComponent/weekhelp";
import { Intro } from './mainComponent/intro';
import { Consider } from './mainComponent/consider';
import { Howwecanhelp } from './mainComponent/howwecanhelp';
import { Mainfooter } from './mainComponent/mainfooter';

export const Main = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [<Branding />, <Weekhelp />, <Intro />, <Consider />, <Howwecanhelp />, <Mainfooter />];
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Initialize sectionRefs
  useEffect(() => {
    sectionRefs.current = sections.map(() => null);
  }, [sections]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0 && currentSection > 0) {
      // Scroll up
      setCurrentSection(currentSection - 1);
    } else if (e.deltaY > 0 && currentSection < sections.length - 1) {
      // Scroll down
      setCurrentSection(currentSection + 1);
    }
    e.preventDefault();
  };

  // 로드할 섹션 개수와 무한 스크롤 임계값 설정
  const sectionsPerPage = 1;
  const threshold = 0.9;

  const loadMoreSections = () => {
    const lastSectionIndex = currentSection + sectionsPerPage;
    if (lastSectionIndex >= sections.length) {
      return;
    }
    setCurrentSection(lastSectionIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // 현재 섹션의 높이만큼 스크롤 위치 이동
    if (sectionRefs.current[currentSection]) {
      sectionRefs.current[currentSection]?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  const handleScroll = () => {
    const scrollHeight = window.document.documentElement.scrollHeight;
    const scrollTop = window.document.documentElement.scrollTop;
    const clientHeight = window.document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight * threshold) {
      loadMoreSections();
    }
  };

  return (
    <div>
      {/* Header 컴포넌트에 z-index 추가 */}
      <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: 100 }}>
        <Header />
      </div>
      {/* onWheel 이벤트에 handleWheel 함수 연결. */}
      {/* 또한 해당 div는 화면 전체 높이를 차지하며 overflow는 hidden으로 설정 */}
      <div onWheel={handleWheel} style={{ height: '100vh', overflow: 'hidden' }}>
        {/* 각 섹션을 순회하며 렌더링 */}
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{
              height: '100vh',
              width: '100%',
              position: 'relative',
              transform: `translateY(-${100 * currentSection}%)`,
              transition: 'transform ease-in-out 1s',
            }}
          >
            {/* 각 섹션 내용 렌더링 */}
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};
