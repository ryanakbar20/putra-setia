import React from 'react';

export default function Organization({ data, theme }) {
  const className = ['organization', 'pt-3', 'pb-3'];
  if (theme === 'light') {
    className.push('light');
  }
  return (
    <section className={className.join(' ')}>
      <div className="container pt-5">
        <div className="row">
          <div className="col text-left">
            <h4>Struktur Organisasi</h4>
          </div>
        </div>
        <div className="row mt-4">
          {data.data.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="organization-item mt-3">
                  <img
                    src="./organization.png"
                    className="img-organization w-100"
                    alt="..."
                  />
                  <h5>{item.name}</h5>
                  <p>{item.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
