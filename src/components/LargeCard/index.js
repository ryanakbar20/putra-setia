import React from 'react';
import Button from '../Button';

export default function LargeCard({ theme }) {
  switch (theme) {
    case 'dark':
      return (
        <div className="container pt-5 pb-5 card-large">
          <h4>Sejarah</h4>
          <div className="card mt-4">
            <div className="row">
              <div className="col-5">
                <img src="./image.jpg" className="img-fluid" width="20px" />
              </div>
              <div className="col-7">
                <div className="text-left">
                  <h5>Sejarah Perkembangan Pencak Silat Putra Setia</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <Button value="SELANJUTNYA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <section className="light">
          <div className="container pt-5 pb-5 card-large light">
            <h4>Sejarah</h4>
            <div className="card mt-4">
              <div className="row">
                <div className="col-5">
                  <img src="./image.jpg" className="img-fluid" width="20px" />
                </div>
                <div className="col-7">
                  <div className="text-left">
                    <h5>Sejarah Perkembangan Pencak Silat Putra Setia</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <Button value="SELANJUTNYA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
}
