import React from 'react';
import { Card, CardBody, Container } from 'react-bootstrap';
import Chara from "../Images/chara.jpg"
import backgroundVideo from '../Images/Coldiac.mp4'

class App extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'Amazing Grace',
        description: 'Booking tiket online konser rohani tanpa metode pembayaran',
        technology: 'Laravel',
        link: 'https://github.com/Elxixau/e-ticket_amazing_grace.git'
      },
      {
        id: 2,
        name: 'E-Library SMPN 2 Samarinda',
        description: 'Perpustakan digital penyedia media baca online',
        technology: 'Laravel',
        link: 'https://github.com/Elxixau/e-library.git'
      },
      {
        id: 3,
        name: 'kumpulinTugas',
        description: 'Form input tugas praktikum untuk mahasiswa pada matakuliah pemrograman visual',
        technology: 'React js',
        link: 'https://github.com/Elxixau/kumpulinTugas.git'
      }
    ]
  };

  render() {
    return (
        <div className="video-background">
        <video
          autoPlay
          loop
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1',
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content text-white ">
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
                <Container>
                    <div className="row">
                        <div className="col-md-4 mb-4 mt-3">
                            <h5 >Halo, Selamat datang di</h5>
                            <h2>Elxixau Showcase - - -</h2> 
                            <p >Berikut sekumpulan project yang pernah saya selesaikan.</p>
                            <div className='author-info' >
                            <img src={Chara} style={{maxHeight:'40px', borderRadius:'50%', marginRight:'10px'}} alt='logo'></img>
                            {'Indra Parlindungan | Web Developer'}
                        </div>
                    </div>
                    {this.state.projects.map(project => (
                    <div className="col-md-4 mb-4" key={project.id}>
                        <Card>
                            <CardBody>
                                <h5 className="card-title">{project.name}</h5>
                                <hr/>
                                <p className="card-text">{project.description}</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <h6 className="text-muted mt-3">{project.technology}</h6>
                                    <a href={project.link} className="btn btn-secondary">Detail Proyek</a>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    ))}
                </div>
                </Container>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
