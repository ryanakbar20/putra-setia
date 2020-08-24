import React from 'react';

export default function Table({ data, theme }) {
  const className = ['card', 'shadow'];
  const tableClass = ['table'];
  const buttonClass = ['btn', 'btn-sm'];
  if (theme === 'dark') {
    className.push('bg-dark');
    tableClass.push('dark');
    buttonClass.push('btn-secondary');
    className.push('text-white');
  } else {
    buttonClass.push('btn-primary');
  }
  return (
    <section className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="container table-ranting">
        <div className="row">
          <div className="col pt-5">
            <h4>Cabang Dan Ranting Terdaftar</h4>
          </div>
        </div>
        <div className="row pt-4 pb-5">
          <div className="col">
            <div className={className.join(' ')}>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    class={tableClass.join(' ')}
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Ranting</th>
                        <th scope="col">Cabang</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.data.map((item, index) => {
                        return (
                          <>
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{item.twig}</td>
                              <td>{item.branch}</td>
                              <td>
                                <div className={buttonClass.join(' ')}>
                                  Detail
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
