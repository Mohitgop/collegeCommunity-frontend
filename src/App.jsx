import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Courses from "./components/courses/courses";
import EventsSection from "./components/Events/EventsSection";
import ChatSection from "./components/chat/ChatSection";
import ChatWithAI from "./components/C-AI/ChatWithAI";
import Community from "./components/community/Community";
import CommunityDetail from "./components/community/CommunityDetail";
import SearchResults from "./components/C-AI/SearchResults";
import SearchHere from "./components/C-AI/SearchHere";
import CourseDetails from "./components/courses/CourseDetails";
import ProfilePage from "./components/user/ProfilePage";
import Feed from "./components/Feed/Feed";
import ChattingScreen from "./components/chat/ChattingScreen";
import LoginPage from "./auth/Login";
import SignupPage from "./auth/SignUp";
import AdminDashboard from "./components/admin/dashboard/mainDashboard";
import { useContext } from "react";
import userContext from "./context/UserContext";
import NotAuthorized from "./components/NotAuthorised";




function App() {
      const { isAdmin } = useContext(userContext)
  return (


    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Feed />} />
        <Route path="events" element={<EventsSection />} />

        <Route path="/courses" element={<Courses />} >
        </Route>
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<CommunityDetail />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        {/* You can add more routes here */}
      </Route>


      <Route path="/friends" element={<ChatSection />} >
        <Route path="/friends/chat/:id" element={<ChattingScreen />} />
      </Route>

      <Route path="/" element={<ChatWithAI />} >
        <Route path="cai" element={<SearchHere />} />
        <Route path="/search" element={<SearchResults />} />
      </Route>

      <Route path="/admin/dashboard" element={isAdmin ? <AdminDashboard />:<Navigate to={'/not-aut'}/>} />
      <Route path="/not-aut" element={!isAdmin?<NotAuthorized/>:<Navigate to={'/'}/> } />
    </Routes>
  );
}

export default App;