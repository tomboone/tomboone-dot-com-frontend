import React from 'react';

const Profile = ({ profile }) => {
  if (!profile) {
    return <div className="container text-center">Loading...</div>;
  }

  return (
    <div className="container text-center">
      <h1 className="visually-hidden">Tom Boone</h1>
      <div className="row">
        <div id="photo" className="col col-12 col-lg-6">
          <img
            src="/images/profile.jpg"
            className="img-fluid"
            alt="Tom Boone profile photo"
          />
        </div>
        <div className="col col-12 col-lg-6">
          <div id="profile" className="container text-start">
            <div id="profile-header" className="pb-3 mb-3 border-bottom border-bottom-secondary">
              <h1 id="name" className="text-uppercase mt-5" style={{ letterSpacing: '0.1em' }}>
                <strong>{profile.name}</strong>
              </h1>
              <div id="tagline" className="text-secondary">
                {profile.profession}
              </div>
              <div id="contact" className="row">
                <div id="email" className="col col-auto pe-1">
                  <small>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </small>
                </div>
                <div id="github" className="col col-auto px-1">
                  <a href={`https://github.com/${profile.github_link}`}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div id="linkedin" className="col col-auto px-1">
                  <a href={`https://linkedin.com/in/${profile.linkedin_link}`}>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div id="profile-body">
              <div id="about" className="mb-3 border-bottom border-bottom-secondary" style={{ fontSize: '0.875em' }}>
                <div dangerouslySetInnerHTML={{ __html: profile.summary_text }} />
              </div>
              <div id="projects" className="mb-3 border-bottom border-bottom-secondary">
                <h2 className="text-secondary text-uppercase mb-1" style={{ fontSize: '1em' }}>
                  Past Projects
                </h2>
                <ul className="list-unstyled">
                  {profile.projects
                    ?.sort((a, b) => a.order_index - b.order_index)
                    .map((project) => (
                      <li key={project.id}>
                        <small>{project.description}</small>
                      </li>
                    ))}
                </ul>
              </div>
              <div id="employers" className="mb-3 border-bottom border-bottom-secondary">
                <h2 className="text-secondary text-uppercase mb-1" style={{ fontSize: '1em' }}>
                  Development Experience
                </h2>
                <ul className="list-unstyled">
                  {profile.work_experiences
                    ?.sort((a, b) => a.order_index - b.order_index)
                    .map((employer) => (
                      <li key={employer.id}>
                        <small>{employer.employer_name} - <em>{employer.position}</em></small>
                      </li>
                    ))}
                </ul>
              </div>
              <div id="consulting" className="mb-3 border-bottom border-bottom-secondary">
                <h2 className="text-secondary text-uppercase mb-1" style={{ fontSize: '1em' }}>
                  Consulting & Contract Work
                </h2>
                <ul className="list-unstyled">
                  {profile.consulting_work
                    ?.sort((a, b) => a.order_index - b.order_index)
                    .map((consulting) => (
                      <li key={consulting.id}>
                        <small>{consulting.employer_name} - <em>{consulting.position}</em></small>
                      </li>
                    ))}
                </ul>
              </div>
              <div id="education" className="mb-3 border-bottom border-bottom-secondary">
                <h2 className="text-secondary text-uppercase mb-1" style={{ fontSize: '1em' }}>
                  Education
                </h2>
                <ul className="list-unstyled">
                  {profile.education
                    ?.sort((a, b) => a.order_index - b.order_index)
                    .map((education) => (
                      <li key={education.id}>
                        <small>{education.degree_type}, {education.university_name}</small>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;