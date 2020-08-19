import React from 'react';

export default function Organization({ data }) {
  return (
    <section className="organization pt-3 pb-3">
      <div className="container pt-5">
        <div className="row">
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
