import CallButton from '../component/common/call-button';
import NavBar from '../component/common/NavBar';
import TagBox from '../component/common/tag-box';

function Subscribe() {
  return(
    <div>
      <NavBar></NavBar>
      <h1 >정기권 구독</h1>
    <TagBox></TagBox>

    <CallButton></CallButton>
    </div>
  )
}

export default Subscribe;
