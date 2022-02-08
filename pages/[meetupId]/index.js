import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  function addMeetupProp(meetupData) {
    console.log(meetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupProp} />;
};

export default NewMeetup;
