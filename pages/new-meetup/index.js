import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  async function addMeetupProp(meetupData) {
    const res = await fetch(`/api/meetups`, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetupProp} />;
};

export default NewMeetup;
