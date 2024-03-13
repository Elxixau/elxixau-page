import React from 'react';

function ProjectCard({ project }) {
  return (
    
      <div className="card project-card mt-2">
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <h6 className="text-muted">{project.technology}</h6>
          <a href={project.link} className="btn btn-secondary">Detail Proyek</a>
        </div>
      </div>
    
  );
}

function ProjectList({ projects }) {
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
    <div className='col-md-4' >
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
      </div>
      </div>
  );
}

const projects = [
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
  }
];

function ProjCard() {
  return (
    <div className='row' >
        <div className='col-md-4'>
            <h5 className='text-muted'>Halo, Selamat datang di</h5>
            <h2>Elxixau Showcase</h2>
            <p className='text-muted'>Berikut sekumpulan plot twist dari diri saya yang tidak kalian ketahui.</p>
            <p className='text-muted'>Indra Parlindungan | Web Developer</p>
        </div>
        <ProjectList projects={projects} />
    </div>
  );
}

export default ProjCard;
