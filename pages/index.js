import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//static page prerender

export async function getStaticProps() {
  const meetups = await fetch('http://localhost:4000/meetups', {
    method: 'GET',
  });
  console.log(meetups);
  return {
    props: {
      // meetups: meetups.map((meetup) => ({
      //   id: meetup.id,
      //   title: meetup.title,
      //   description: meetup.description,
      //   img: meetup.img,
      // })),
    },
    revalidate: 10,
  };
}

/*
serverside props
export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;
  
  //fetch from API
  return{
    props:{
      meetups: DUMMY_DATA
    }
  }
}
*/

export default HomePage;
