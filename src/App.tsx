import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '@/pages/index/index' // 페이지 컴포넌트
import BookmarkPage from '@/pages/bookmark/index'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
        <Route path='/:id' element={<MainPage />}></Route>
        <Route path='/bookmark' element={<BookmarkPage />}></Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

/**
 * <Route> 
 * index 속성 : 가장 기본이 되는 페이지
 * path 속성 : 경로
 * element 속성 : 컴포넌트 지정
 */

export default App