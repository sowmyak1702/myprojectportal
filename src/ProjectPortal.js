import { Routes, Route } from 'react-router-dom';
import { MyHome } from './MyComponents/MyHome';
import Mylogin from './MyComponents/Mylogin';
import Myabout from './MyComponents/Myabout';
import Adminhistory from './MyComponents/Admin/Adminhistory';
import Adminedit from './MyComponents/Admin/Adminedit';
import Adminprofile from './MyComponents/Admin/Adminprofile';
import MyLatestAnnouncements from './MyComponents/MyLatestAnnouncements';
import MyStats from './MyComponents/MyStats';
import Adminhome from './MyComponents/Admin/Adminhome';
import Researcherhome from './MyComponents/Researcher/Researcherhome';
import Researchergrants from './MyComponents/Researcher/Researchergrants';
import Researcherprofile from './MyComponents/Researcher/Researcherprofile';
import Researcherraise from './MyComponents/Researcher/Researcherraise';
import Error from './MyComponents/Error';
function ProjectPortal() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<MyHome />}></Route>
        <Route path='/about' element={<Myabout />}></Route>
        <Route path='/latestannouncements' element={<MyLatestAnnouncements />}></Route>
        <Route path='/stats' element={<MyStats />}></Route>
        <Route path='/login' element={<Mylogin />}></Route>
        <Route path='/admin' element={<Adminhome />}></Route>
        <Route path='/history' element={<Adminhistory />}></Route>
        <Route path='/edit' element={<Adminedit />}></Route>
        <Route path='/profile' element={<Adminprofile />}></Route>
        <Route path='/researcher' element={<Researcherhome />}></Route>
        <Route path='/grants' element={<Researchergrants />}></Route>
        <Route path='/rprofile' element={<Researcherprofile />}></Route>
        <Route path='/raise' element={<Researcherraise />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
     </div>

  );
}

export default ProjectPortal;