import React from 'react';
import { Card, CardBody, Container } from 'react-bootstrap';
import Chara from "../Images/chara.jpg";
import Laravel from "../Images/laravel.png";
import ReactIco from "../Images/React.png";

class App extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'Amazing Grace',
        img: Laravel,
        description: 'Booking tiket online konser rohani tanpa metode pembayaran.',
        technology: 'Laravel',
        link: 'https://github.com/Elxixau/e-ticket_amazing_grace.git'
      },
      {
        id: 2,
        name: 'E-Library SMPN 2 Samarinda',
        img: Laravel,
        description: 'Manajemen perpustakaan digital penyedia media baca online (e-book).',
        technology: 'Laravel',
        link: 'https://github.com/Elxixau/e-library.git'
      },
      {
        id: 3,
        name: 'kumpulinTugas',
        img: ReactIco,
        description: 'Form input tugas praktikum untuk mahasiswa pada matakuliah pemrograman visual.',
        technology: 'React js',
        link: 'https://github.com/Elxixau/kumpulinTugas.git'
      }
    ]
  };

  render() {
    return (
      <div className="content text-white">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
          <Container>
            <div className="row">
              <div className="col-md-4 mb-4 mt-3">
                <h5 >Halo, Selamat datang di</h5>
                <h1>Elxixau Showcase - - -</h1> 
                <p >Berikut sekumpulan project yang pernah saya kerjakan.</p>
                <div className='author-info' >
                  <img src={Chara} style={{maxHeight:'40px', borderRadius:'50%', marginRight:'10px'}} alt='logo'></img>
                  {'Indra Parlindungan | Web Developer'}
                </div>
              </div>
              {this.state.projects.map(project => (
                <div className="col-md-4 mb-4" key={project.id}>
                  <Card className='card border-0 text-white shadow-sm'>
                    <CardBody>
                      <div className='card-title' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize:'20px'}}>
                        {project.name}
                        <img src={project.img} alt='logo'  style={{maxHeight:'40px'}}></img>
                      </div>
                      <hr/>
                      <p className="card-text">{project.description}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h6 className="text-muted mt-3" >{project.technology}</h6>
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
    );
  }
}

export default App;
