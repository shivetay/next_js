// /api/new-meetpu

function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json('http://localhost:4000/meetups');
  }

  if (req.method === 'POST') {
    const data = res.body;

    const { title, img, addres, description } = data;

    res.status(201).json({
      title,
      img,
      addres,
      description,
    });
  }
}

export default handler;
