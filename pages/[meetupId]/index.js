const MetupDetails = (props) => {
  return (
    <>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.addres}</p>
      <p>{props.description}</p>
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: '1',
        },
      },
      {
        params: {
          meetupId: '2',
        },
      },
      {
        params: {
          meetupId: '3',
        },
      },
      {
        params: {
          meetupId: '4',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetup = context.params;

  return {
    props: {
      meetupData: {
        id: meetup.id,
        img: props.img,
        title: props.title,
        addres: props.addres,
        description: props.description,
      },
    },
  };
}

export default MetupDetails;
