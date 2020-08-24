import React from 'react';

export default function News({ data, theme }) {
  const className = ['news-item', 'text-left'];
  const smallClass = ['row', 'mt-5', 'justify-content-center', ' news-small'];
  if (theme === 'light') {
    className.push('light');
    smallClass.push('light');
  }
  return (
    <section className={theme === 'dark' ? 'news' : 'news light'}>
      <div className="container pt-5 pb-5 text-left">
        <h4>{data.title}</h4>
        {data.data.map((item) => {
          return (
            <div className={smallClass.join(' ')}>
              <div className="col-11">
                <h5>{item.title}</h5>
              </div>
              <div className="col-11 my-2">
                <img
                  src={item.imageUrl[0].url}
                  alt="..."
                  className="img-fluid"
                />
              </div>
              <div className="col-11">
                <p>{item.content}</p>
                <small>{item.date}</small>
              </div>
            </div>
          );
        })}
        {data.data.map((item) => {
          return (
            <div key={item.id} className="d-none d-md-flex row mt-5">
              <div className="col">
                <div className={className.join(' ')}>
                  <div className="d-flex flex-col">
                    <img
                      src={item.imageUrl[0].url}
                      alt="..."
                      className="img-fluid"
                    />
                    <div className="news-content ml-4">
                      <div className="row">
                        <div className="col">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>{item.content}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <small>{item.date}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
